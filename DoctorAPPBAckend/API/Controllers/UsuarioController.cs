using Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.DTOs;
using Models.Entidades;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    
    public class UsuarioController : BaseApiController
    {
        private readonly ApplicationDbContext _db;

        public UsuarioController(ApplicationDbContext db)
        {
            _db = db;
        }
        [HttpGet] //api/usuario
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios()
        {
            var usuarios = await _db.Usuarios.ToListAsync();
            return Ok(usuarios);
        }
        [HttpGet("{id}")] //api/usuario/1

        public async Task<ActionResult<Usuario>> GetUsuario(int id)
        {
            var usuario = await _db.Usuarios.FindAsync(id);
            return Ok(usuario);
        }

        [HttpPost("registro")] //POST:api/usuario/registro
        
        public async Task<ActionResult<Usuario>> Registro(RegistroDto registroDto)
        {
            if (await UsuarioExite(registroDto.Username)) return BadRequest("UserName ya esta registrado");

            using var hmac = new HMACSHA512();
            var uuario = new Usuario
            {
                UserName = registroDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registroDto.Password)),
                PasswordSalt = hmac.Key
            };
            _db.Usuarios.Add(uuario);
            await _db.SaveChangesAsync();
            return Ok(uuario);
        }

        [HttpPost("login")] //POST: api/usuario/login

        public async Task<ActionResult<Usuario>> Login(LoginDto loginDto)
        {
            var usuario = await _db.Usuarios.SingleOrDefaultAsync(x => x.UserName == loginDto.Username);
            if (usuario == null) return Unauthorized("Usuario No Valido");
            using var hmac = new HMACSHA512(usuario.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));
            for (var i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != usuario.PasswordHash[i]) return Unauthorized("Password  NoValido");
            }
            return Ok(usuario);

        }

        private async Task<bool> UsuarioExite(string username)
        {
            return await _db.Usuarios.AnyAsync(x=>x.UserName == username.ToLower());
        }
    }   
}

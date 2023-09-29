using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DTOs
{
    public class RegistroDto
    { 
        [Required(ErrorMessage = "Usuario es requerido")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Contraseña es requerida")]
        public string Password { get; set; }
    }
}

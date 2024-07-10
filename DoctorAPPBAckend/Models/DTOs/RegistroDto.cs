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
        [StringLength(10,MinimumLength = 4, ErrorMessage = "El Password debe de ser minimo 4 ,maximo 10 caracteres")]
        public string Password { get; set; }
    }
}

// Categorias
var anoString = ''
var categoriaString = ''
var statusString = ''
var logoMarron =
'data:image/jpeg;base64,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j3taGuqdj2bH0+tXZ+l/mkhiGvq28P2Kvweuuuqoqdba7bWwS48/kUMXOxcxrnY79+zRwggiePa8NcsLKpyM1tGHRj3jCxaWuFmM1uOPtDmj7O6qjMspd6WEz9P6P6av17Karf6NcrP1cw72CzKyKzj2uHpOxyCNrmn9Ltn6dO/+jPZ/gFBljljKBjwyxyJGT9/H+5L5v0v7jJD2zCfESJijD92f70X/0PVUHK+zeiftW30tJ3xE/m8r5bSSOy6PzDff9H5v8F+p6fR9JnobfSgensjbt/N2bfbtQs37J6bftX0Z9vMzB3R6fv8AobvU/wCDXy6kgdun7Ex+f9Lf9H+cfqer0vSZ6O30to9PZG3bHs2bfbs2qa+VUkVp3P7X6qVS39nfa2+rt+0S3bMxu/wf/B+t/ov8L+4vmBJA/T6rse5+bY/J+3+q/VSrVfs/7Xb6Xpfa/wDDbdvqcN/nI9/0fS/8DXy8kkeiI7S+bb9H/u/6r9VJL5VSRWv1UkvlVJJT9VJL5VSSU/VSS+VUklP1UkvlVJJT/9n/7Q2+UGhvdG9zaG9wIDMuMAA4QklNBCUAAAAAABAAAAAAAAAAAAAAAAAAAAAAOEJJTQQvAAAAAABKDIYBAEgAAABIAAAAAAAAAAAAAADQAgAAQAIAAAAAAAAAAAAAGAMAAGQCAAAAAcADAACwBAAAAQAPJwEAbGx1bgAAAAAAAAAAAAA4QklNA+0AAAAAABABK//ZAAEAAgEr/9kAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAB4OEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNBAoAAAAAAAEAADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQAAAAAAAACAAI4QklNBAIAAAAAAAYAAAAAAAA4QklNBDAAAAAAAAMBAQEAOEJJTQQtAAAAAAACAAA4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQQeAAAAAAAEAAAAADhCSU0EGgAAAAADSQAAAAYAAAAAAAAAAAAAAEEAAAH0AAAACgBVAG4AdABpAHQAbABlAGQALQAyAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAH0AAAAQQAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAbnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAAQQAAAABSZ2h0bG9uZwAAAfQAAAAGc2xpY2VzVmxMcwAAAAFPYmpjAAAAAQAAAAAABXNsaWNlAAAAEgAAAAdzbGljZUlEbG9uZwAAAAAAAAAHZ3JvdXBJRGxvbmcAAAAAAAAABm9yaWdpbmVudW0AAAAMRVNsaWNlT3JpZ2luAAAADWF1dG9HZW5lcmF0ZWQAAAAAVHlwZWVudW0AAAAKRVNsaWNlVHlwZQAAAABJbWcgAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAEEAAAAAUmdodGxvbmcAAAH0AAAAA3VybFRFWFQAAAABAAAAAAAAbnVsbFRFWFQAAAABAAAAAAAATXNnZVRFWFQAAAABAAAAAAAGYWx0VGFnVEVYVAAAAAEAAAAAAA5jZWxsVGV4dElzSFRNTGJvb2wBAAAACGNlbGxUZXh0VEVYVAAAAAEAAAAAAAlob3J6QWxpZ25lbnVtAAAAD0VTbGljZUhvcnpBbGlnbgAAAAdkZWZhdWx0AAAACXZlcnRBbGlnbmVudW0AAAAPRVNsaWNlVmVydEFsaWduAAAAB2RlZmF1bHQAAAALYmdDb2xvclR5cGVlbnVtAAAAEUVTbGljZUJHQ29sb3JUeXBlAAAAAE5vbmUAAAAJdG9wT3V0c2V0bG9uZwAAAAAAAAAKbGVmdE91dHNldGxvbmcAAAAAAAAADGJvdHRvbU91dHNldGxvbmcAAAAAAAAAC3JpZ2h0T3V0c2V0bG9uZwAAAAAAOEJJTQQoAAAAAAAMAAAAAT/wAAAAAAAAOEJJTQQUAAAAAAAEAAAAAzhCSU0EDAAAAAAHcgAAAAEAAACgAAAAFQAAAeAAACdgAAAHVgAYAAH/2P/gABBKRklGAAECAABIAEgAAP/tAAxBZG9iZV9DTQAB/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAFQCgAwEiAAIRAQMRAf/dAAQACv/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A9LORkvutrx62EUkNd6jy0klrbPbtZZ7Pf9NLFzq73upcDXeyZrJBBDT6b3VWN9lrGWex/wCfV/hq6ksy+1g9HGYXZNohji07GyY9S2yPT/RfT9Lf6lizMqrOofRj0GbaK9tGQWbWb7T6PvLn2OvsbtfkZDP/ACfrYzSSPFsY8cZijUCR6SSen6cv6nG7qSwPWzG1ZTsdl1rcSwsxyTYfVsG3duY2Lbneu6yu3131YNf6P/BerYp3v6qya6xbS6wMPrFzbXuP6Sy1lVTg7Gruroq+hXT6D8i2r9L6dX6UcfgVfdT+/Ef3jX9bUfN+l6ncQb8qulza4dZc/VlTBLiB9J2u1rGN/wBJY7Ysw29ZuaxlVoba6TY+trXVMcCW/Z22WB3qek5361b9Oz0PTx6qrH3ehayqckEV4u4XZQay/L0/RsYPda0O/wAK7f8Aoa2s9P1f0v8ApEeK9gUeyIyAlKJu9Af3f3/6qejNotodcXCsVlwtDiPYWktdvcDt/NRara7qxZU4OYZgjyO1w/suWMcKzHxrLSwUfpG14tTB6npMDhTVkO2h/q3N9+VXX/prf9IoNu6jX6YoH2HHoaN1Noa8MY4na/KeHPs9VtFTrPTrv9S3Jycf1P0Vd9lo4iNwvPLxlZhIb/pH0/3fTxcX+C76Sx93WnNq9z2m4vcGhjNzWAt9Ku97muqZk2Ndusf6fpVV+vTXXff6Nqn07MzXa5z2y0tp9JoBcbnbbLPcxzmO9Ct36T0vofrP+iR4vAsZ5ciJInCVdIn1fuuqks7q1hpu6deW2GqrJJtNbHvhpx8qtrnspa92z1X1oDxj9T6lSXUvtw/s9zLG3VPazeLMSysPZexnu9u6tSCGx6VdsFuwkuaPS6KOkW2MxCyw5b2XbK3eo7EGdusr2sHrW47sJn803+dxv5ClfX0w5GMelYrqrQ603Ppx7Kv0XoZA2vf6dTXNdf6Hp1/6b0v3E72xrROhI2/dVb0ar/bsUZYw9x9Y/wAl22Y9T0/W2+j63p/pfQ9T1vS/S7PTXPUdJyacTp1zcOil7LMQ2WY7XjJA3VNt3S1ntdP676jv6L9oU3W9VN/7bGFklzX+2obY+w/RdT9l9X7R9qf/AMo7Psv2v1/T6ej7Q19V9P3fV0Vb0yS57Fx+o4T8jqOMx9gflXnLwnTNtfqOFWViep7WZFVOzY1n6HMo/R/zvo3LOoxiX0uyqhtOHTsOVhX5Gvq5j3taGuqdj2bH0+tXZ+l/mkhiGvq28P2Kvweuuuqoqdba7bWwS48/kUMXOxcxrnY79+zRwggiePa8NcsLKpyM1tGHRj3jCxaWuFmM1uOPtDmj7O6qjMspd6WEz9P6P6av17Karf6NcrP1cw72CzKyKzj2uHpOxyCNrmn9Ltn6dO/+jPZ/gFBljljKBjwyxyJGT9/H+5L5v0v7jJD2zCfESJijD92f70X/0PVUHK+zeiftW30tJ3xE/m8r5bSSOy6PzDff9H5v8F+p6fR9JnobfSgensjbt/N2bfbtQs37J6bftX0Z9vMzB3R6fv8AobvU/wCDXy6kgdun7Ex+f9Lf9H+cfqer0vSZ6O30to9PZG3bHs2bfbs2qa+VUkVp3P7X6qVS39nfa2+rt+0S3bMxu/wf/B+t/ov8L+4vmBJA/T6rse5+bY/J+3+q/VSrVfs/7Xb6Xpfa/wDDbdvqcN/nI9/0fS/8DXy8kkeiI7S+bb9H/u/6r9VJL5VSRWv1UkvlVJJT9VJL5VSSU/VSS+VUklP1UkvlVJJT/9k4QklNBCEAAAAAAFUAAAABAQAAAA8AQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAAAATAEEAZABvAGIAZQAgAFAAaABvAHQAbwBzAGgAbwBwACAAQwBTADMAAAABADhCSU0EBgAAAAAABwAEAAAAAQEA/+EPz2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4xLWMwMzYgNDYuMjc2NzIwLCBNb24gRmViIDE5IDIwMDcgMjI6NDA6MDggICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eGFwPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4YXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHhhcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTMyBXaW5kb3dzIiB4YXA6Q3JlYXRlRGF0ZT0iMjAxOC0wOC0wOVQxNjozNDoxOC0wMzowMCIgeGFwOk1vZGlmeURhdGU9IjIwMTgtMDgtMDlUMTY6MzQ6MTgtMDM6MDAiIHhhcDpNZXRhZGF0YURhdGU9IjIwMTgtMDgtMDlUMTY6MzQ6MTgtMDM6MDAiIHhhcE1NOkRvY3VtZW50SUQ9InV1aWQ6RTgyNEUyODIwOTlDRTgxMTk0RjVGM0JBNDREODE1MzgiIHhhcE1NOkluc3RhbmNlSUQ9InV1aWQ6ODREMzJEMzUwQjlDRTgxMTk0RjVGM0JBNDREODE1MzgiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgcGhvdG9zaG9wOkhpc3Rvcnk9IiIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iMjk5OTk5NC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iMjk5OTk5NC8xMDAwMCIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgdGlmZjpOYXRpdmVEaWdlc3Q9IjI1NiwyNTcsMjU4LDI1OSwyNjIsMjc0LDI3NywyODQsNTMwLDUzMSwyODIsMjgzLDI5NiwzMDEsMzE4LDMxOSw1MjksNTMyLDMwNiwyNzAsMjcxLDI3MiwzMDUsMzE1LDMzNDMyO0ZBMzYzM0FGODYzNTU4MTJDNEVDNzAyNkQzNERCMEE2IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iNTAwIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjUiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpOYXRpdmVEaWdlc3Q9IjM2ODY0LDQwOTYwLDQwOTYxLDM3MTIxLDM3MTIyLDQwOTYyLDQwOTYzLDM3NTEwLDQwOTY0LDM2ODY3LDM2ODY4LDMzNDM0LDMzNDM3LDM0ODUwLDM0ODUyLDM0ODU1LDM0ODU2LDM3Mzc3LDM3Mzc4LDM3Mzc5LDM3MzgwLDM3MzgxLDM3MzgyLDM3MzgzLDM3Mzg0LDM3Mzg1LDM3Mzg2LDM3Mzk2LDQxNDgzLDQxNDg0LDQxNDg2LDQxNDg3LDQxNDg4LDQxNDkyLDQxNDkzLDQxNDk1LDQxNzI4LDQxNzI5LDQxNzMwLDQxOTg1LDQxOTg2LDQxOTg3LDQxOTg4LDQxOTg5LDQxOTkwLDQxOTkxLDQxOTkyLDQxOTkzLDQxOTk0LDQxOTk1LDQxOTk2LDQyMDE2LDAsMiw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwyMCwyMiwyMywyNCwyNSwyNiwyNywyOCwzMDtBMkM4OUZFQzRFMjA0M0FBQ0VCMUM4MTgxM0YyQzgwNyI+IDx4YXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ1dWlkOkJEQzlDQkY5MDc5Q0U4MTE5NEY1RjNCQTQ0RDgxNTM4IiBzdFJlZjpkb2N1bWVudElEPSJ1dWlkOkJEQzlDQkY5MDc5Q0U4MTE5NEY1RjNCQTQ0RDgxNTM4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAA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';

var now = new Date();
var jsDate = now.getDate()+'/'+(now.getMonth()+1)+'/'+now.getFullYear()+' às '+now.getHours()+':'+now.getMinutes();

function convertDate(date){	
	return date.split('-').reverse().join('/');
}

/********** FUNÇÕES *************/

// Gerar Relatorios por Status
function gerarRelChamadosPendentes() {

  var categoria = $('#categoria').val()
  var status = $('#status').val()

  switch (status) {
    case 'tudo':
      statusString = 'Em Processamento e Pendentes'
      break;
    case '2':
      statusString = 'Em Processamento'
      break;
    case '4':
      statusString = 'Pendentes'
      break;
    case '6':
      statusString = 'Fechados'
      break;
    default:
      statusString = ''
      break;
  }

  if(categoria == 9){categoriaString  = 'Suporte Técnico'}
  if(categoria == 11){categoriaString = 'Bilhetagem Eletrônica'}
  if(categoria == 12){categoriaString = 'Desenvolvimento'}
  if(categoria == 13){categoriaString = 'Compras'}
  if(categoria == 14){categoriaString = 'Manutenção Predial'}
  if(categoria == 15){categoriaString = 'Infraestrutura Embarcada'}
  if(categoria == 41){categoriaString = 'Redes'}

  $('#tabelaChamadosPendentes').append("<tfoot style='display:none;'><tr><td></td><td></td><td></td><td></td><td></td><td><b>Total Chamados:</b></td><td></td></tr></tfoot>")
  var table = $("#tabelaChamadosPendentes").dataTable({
      bProcessing: true,
      serverSide: false,
      destroy: true,
      sAjaxSource: "ajax/chamados_pendentes.php?categoria="+categoria+"&status="+status,
      dom:
        'Bfrtip',
        lengthMenu: [
            [ 10, 25, 50, -1 ],
            [ '10 linhas', '25 linhas', '50 linhas', 'Exibir tudo' ]
        ],
        buttons: [
            {
                extend: 'pageLength',
                text: 'Exibir 10 linhas'
            },
            {
                extend: 'copyHtml5',
                text: 'Copiar',
                className: 'btn btn-primary'
            },
            {
                extend: 'csvHtml5',
                text: 'CSV',
                title: 'Relatorio de chamados ' + statusString + ' - ' + categoriaString,
                className: 'btn btn-primary'
            },
            {
                extend: 'pdfHtml5',
                text: 'PDF',
                title: 'Relatorio de chamados ' + statusString + ' - ' + categoriaString,
                className: 'btn btn-primary',
                orientation: 'landscape',
                pageSize: 'LEGAL',
                footer: true,
                exportOptions: {
                  columns: ':visible',
                  search: 'applied',
                  order: 'applied'
                },
                customize: function(doc){

                  doc.content[1].table.widths = ['5%', '10%', '30%', '20%', '15%', '10%', '10%']

                  doc.content.splice(0,1);

                  logoMarron

                  doc.pageMargins = [20,60,20,30];
                  doc.defaultStyle.fontSize = 10;
                  doc.styles.tableHeader.fontSize = 10;

                  doc['header'] = (function() {
                    return {
                      columns: [
                        {
                          alignment: 'left',
                          image: logoMarron,
                          width: 200,
                        },
                        {
                          alignment: 'right',
                          text: 'Relatorio de chamados ' + statusString + ' - ' + categoriaString,
                          fontsize: 14,
                          margin: [20,5]
                        },
                      ],
                      margin: 20
                    }
                  });

                  doc['footer'] = (function(page, pages) {
                    return {
                      columns: [
                        {
                          alignment: 'left',
                          text: ['Pagina ', { text: page.toString() },	' de ',	{ text: pages.toString() }]
                        },
                        {
                          alignment: 'center',
                          text: ['Relatório gerado através do Sistema GLPI ']
                        },
                        {
                          alignment: 'right',
                          text: [jsDate.toString()]
                        }
                      ],
                      margin: [20,0,20,0]
                    }
                  });

                  var objLayout = {};
                  objLayout['hLineWidth'] = function(i) { return .5; };
                  objLayout['vLineWidth'] = function(i) { return .5; };
                  objLayout['hLineColor'] = function(i) { return '#aaa'; };
                  objLayout['vLineColor'] = function(i) { return '#aaa'; };
                  objLayout['paddingLeft'] = function(i) { return 4; };
                  objLayout['paddingRight'] = function(i) { return 4; };
                  doc.content[0].layout = objLayout;

                }
            },
        ],
        aoColumns: [
          {
            sTitle: 'ID',
            mData: 'ID'
          },
          {
            sTitle: 'Tipo',
            mData: 'Tipo'
          },
          {
            sTitle: 'Titulo',
            mData: 'Titulo'
          },
          {
            sTitle: 'Requerente',
            mData: 'Requerente'
          },
          {
            sTitle: 'Local',
            mData: 'Local'
          },
          {
            sTitle: 'Aberto',
            mData: 'Aberto'
          },
          {
            sTitle: 'Tempo (dias)',
            mData: 'Tempo Pendente'
          },
        ],
        language: {
            "sProcessing":   "Carregando..."
        },
      aaSorting: [[ 0, "asc" ]],
      fnFooterCallback: function(nRow, aaData) {
        var iTotal = aaData.length

        var nCells = nRow.getElementsByTagName('td')
        nCells[6].innerHTML = "<b>" + parseInt(iTotal) + "</b>"
      }
  });

}

// Gerar Relatório de Chamados por Equipamento
function gerarRelChamadosEquip() {

  var ano = $('#ano').val()
  var equipamento = $('#equipamento').val()

  $('#tabelaChamadosEquipamentos').append("<tfoot style='display:none;'><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tfoot>")
  var table = $("#tabelaChamadosEquipamentos").dataTable({
    bProcessing: true,
    serverSide: false,
    destroy: true,
    sAjaxSource: "ajax/chamados_equipamentos.php?ano="+ano+"&equipamento="+equipamento,
    dom:
      'Bfrtip',
      lengthMenu: [
          [ 10, 25, 50, -1 ],
          [ '10 linhas', '25 linhas', '50 linhas', 'Exibir tudo' ]
      ],
      buttons: [
          {
              extend: 'pageLength',
              text: 'Exibir 10 linhas'
          },
          {
              extend: 'copyHtml5',
              text: 'Copiar',
              className: 'btn btn-primary'
          },
          {
              extend: 'csvHtml5',
              text: 'CSV',
              title: 'Relatorio sintético de chamados por equipamento (' + equipamento + ') - Referente à: ' + ano,
              className: 'btn btn-primary'
          },
          {
              extend: 'pdfHtml5',
              text: 'PDF',
              title: 'Relatorio sintético de chamados por equipamento (' + equipamento + ') - Referente à: ' + ano,
              className: 'btn btn-primary',
              orientation: 'landscape',
              pageSize: 'A4',
              footer: true,
              exportOptions: {
                columns: ':visible',
                search: 'applied',
                order: 'applied'
              },
              customize: function(doc){

                doc.content[1].table.widths = ['24%', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '8%', '8%']
                doc.content.splice(0,1);

                logoMarron

                doc.pageMargins = [20,60,20,30];
                doc.defaultStyle.fontSize = 10;
                doc.styles.tableHeader.fontSize = 10;

                doc['header'] = (function() {
                  return {
                    columns: [
                      {
                        alignment: 'left',
                        image: logoMarron,
                        width: 200,
                      },
                      {
                        alignment: 'right',
                        text: 'Relatorio sintético de chamados por equipamento (' + equipamento + ') - Referente à: ' + ano,
                        fontsize: 14,
                        margin: [20,5]
                      },
                    ],
                    margin: 20
                  }
                });

                doc['footer'] = (function(page, pages) {
                  return {
                    columns: [
                      {
                        alignment: 'left',
                        text: ['Pagina ', { text: page.toString() },	' de ',	{ text: pages.toString() }]
                      },
                      {
                        alignment: 'center',
                        text: ['Relatório gerado através do Sistema GLPI ']
                      },
                      {
                        alignment: 'right',
                        text: [jsDate.toString()]
                      }
                    ],
                    margin: [20,0,20,0]
                  }
                });

                var objLayout = {};
                objLayout['hLineWidth'] = function(i) { return .5; };
                objLayout['vLineWidth'] = function(i) { return .5; };
                objLayout['hLineColor'] = function(i) { return '#aaa'; };
                objLayout['vLineColor'] = function(i) { return '#aaa'; };
                objLayout['paddingLeft'] = function(i) { return 4; };
                objLayout['paddingRight'] = function(i) { return 4; };
                doc.content[0].layout = objLayout;

              }

          },
      ],
      aoColumns: [
        {
          sTitle: 'Localidade',
          mData: 'Localidade',
        },
        {
          sTitle: 'Jan',
          mData: 'Jan'
        },
        {
          sTitle: 'Fev',
          mData: 'Fev'
        },
        {
          sTitle: 'Mar',
          mData: 'Mar'
        },
        {
          sTitle: 'Abr',
          mData: 'Abr'
        },
        {
          sTitle: 'Mai',
          mData: 'Mai'
        },
        {
          sTitle: 'Jun',
          mData: 'Jun'
        },
        {
          sTitle: 'Jul',
          mData: 'Jul'
        },
        {
          sTitle: 'Ago',
          mData: 'Ago'
        },
        {
          sTitle: 'Set',
          mData: 'Set'
        },
        {
          sTitle: 'Out',
          mData: 'Out'
        },
        {
          sTitle: 'Nov',
          mData: 'Nov'
        },
        {
          sTitle: 'Dez',
          mData: 'Dez'
        },
        {
          sTitle: 'Total',
          mData: 'Total'
        },
        {
          sTitle: 'SLA',
          mData: 'Sla'
        }
      ],
      language: {
          "sProcessing":   "Carregando..."
      },
      aaSorting: [[ 13, "desc" ]],
      footerCallback: function ( row, data, start, end, display ) {
        var api = this.api()

        var intVal = function ( i ) {
          return typeof i === 'string' ?
          i.replace(/[\$,]/g, '')*1 :
          typeof i === 'number' ?
          i : 0;
        };

        var jan = api
          .column(1)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var fev = api
          .column(2)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var mar = api
          .column(3)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var abr = api
          .column(4)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var mai = api
          .column(5)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var jun = api
          .column(6)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var jul = api
          .column(7)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var ago = api
          .column(8)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var set = api
          .column(9)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var out = api
          .column(10)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var nov = api
          .column(11)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var dez = api
          .column(12)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var total = api
          .column(13)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 1)

        $(api.column(0).footer()).html('<b>Total</b>');
        $(api.column(1).footer()).html('<b>' + jan + '</b>');
        $(api.column(2).footer()).html('<b>' + fev + '</b>');
        $(api.column(3).footer()).html('<b>' + mar + '</b>');
        $(api.column(4).footer()).html('<b>' + abr + '</b>');
        $(api.column(5).footer()).html('<b>' + mai + '</b>');
        $(api.column(6).footer()).html('<b>' + jun + '</b>');
        $(api.column(7).footer()).html('<b>' + jul + '</b>');
        $(api.column(8).footer()).html('<b>' + ago + '</b>');
        $(api.column(9).footer()).html('<b>' + set + '</b>');
        $(api.column(10).footer()).html('<b>' + out + '</b>');
        $(api.column(11).footer()).html('<b>' + nov + '</b>');
        $(api.column(12).footer()).html('<b>' + dez + '</b>');
        $(api.column(13).footer()).html('<b>' + total + '</b>');
        $(api.column(14).footer()).html('<div class="text-center">-</div>');

     }

  });
}

// Gerar Relatório Sintético de Chamados SAP
function gerarRelChamadosSapAnual() {

  var status = $('#status').val()
  var ano = $('#ano').val()
  anoString = 'Referente à: ' + ano

  switch (status) {
    case 'todos':
      statusString = 'Todos'
      break;
    case 2:
      statusString = 'Processando'
      break;
    case 4:
      statusString = 'Pendente'
      break;
    case 6:
      statusString = 'Fechado'
      break;
  }

  $('#tabelaChamadosSapAnual').append("<tfoot style='display:none;'><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tfoot>")
  var table = $("#tabelaChamadosSapAnual").dataTable({
    bProcessing: true,
    serverSide: false,
    destroy: true,
    sAjaxSource: "ajax/sap_anual.php?ano="+ano+"&status="+status,
    dom:
      'Bfrtip',
      lengthMenu: [
          [ 10, 25, 50, -1 ],
          [ '10 linhas', '25 linhas', '50 linhas', 'Exibir tudo' ]
      ],
      buttons: [
          {
              extend: 'pageLength',
              text: 'Exibir 10 linhas'
          },
          {
              extend: 'copyHtml5',
              text: 'Copiar',
              className: 'btn btn-primary'
          },
          {
              extend: 'csvHtml5',
              text: 'CSV',
              title: 'Relatorio Sintético de chamados SAP - ' + anoString,
              className: 'btn btn-primary'
          },
          {
              extend: 'pdfHtml5',
              text: 'PDF',
              title: 'Relatorio Sintético de chamados SAP - ' + anoString,
              className: 'btn btn-primary',
              orientation: 'landscape',
              pageSize: 'A4',
              footer: true,
              exportOptions: {
                columns: ':visible',
                search: 'applied',
                order: 'applied'
              },
              customize: function(doc){

                doc.content[1].table.widths = ['20%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '6%', '8%']
                doc.content.splice(0,1);

                logoMarron

                doc.pageMargins = [20,60,20,30];
                doc.defaultStyle.fontSize = 10;
                doc.styles.tableHeader.fontSize = 10;

                doc['header'] = (function() {
                  return {
                    columns: [
                      {
                        alignment: 'left',
                        image: logoMarron,
                        width: 200,
                      },
                      {
                        alignment: 'right',
                        text: 'Relatorio Sintético de chamados SAP - ' + anoString,
                        fontsize: 14,
                        margin: [20,5]
                      },
                    ],
                    margin: 20
                  }
                });

                doc['footer'] = (function(page, pages) {
                  return {
                    columns: [
                      {
                        alignment: 'left',
                        text: ['Pagina ', { text: page.toString() },	' de ',	{ text: pages.toString() }]
                      },
                      {
                        alignment: 'center',
                        text: ['Relatório gerado através do Sistema GLPI']
                      },
                      {
                        alignment: 'right',
                        text: [jsDate.toString()]
                      }
                    ],
                    margin: [20,0,20,0]
                  }
                });

                var objLayout = {};
                objLayout['hLineWidth'] = function(i) { return .5; };
                objLayout['vLineWidth'] = function(i) { return .5; };
                objLayout['hLineColor'] = function(i) { return '#aaa'; };
                objLayout['vLineColor'] = function(i) { return '#aaa'; };
                objLayout['paddingLeft'] = function(i) { return 4; };
                objLayout['paddingRight'] = function(i) { return 4; };
                doc.content[0].layout = objLayout;

              }
          },
      ],
      aoColumns: [
        {
          sTitle: 'Categoria',
          mData: 'Categoria'
        },
        {
          sTitle: 'Jan',
          mData: 'Jan'
        },
        {
          sTitle: 'Fev',
          mData: 'Fev'
        },
        {
          sTitle: 'Mar',
          mData: 'Mar'
        },
        {
          sTitle: 'Abr',
          mData: 'Abr'
        },
        {
          sTitle: 'Mai',
          mData: 'Mai'
        },
        {
          sTitle: 'Jun',
          mData: 'Jun'
        },
        {
          sTitle: 'Jul',
          mData: 'Jul'
        },
        {
          sTitle: 'Ago',
          mData: 'Ago'
        },
        {
          sTitle: 'Set',
          mData: 'Set'
        },
        {
          sTitle: 'Out',
          mData: 'Out'
        },
        {
          sTitle: 'Nov',
          mData: 'Nov'
        },
        {
          sTitle: 'Dez',
          mData: 'Dez'
        },
        {
          sTitle: 'Total',
          mData: 'Total'
        }
      ],
      language: {
          "sProcessing":   "Carregando..."
      },
      aaSorting: [[ 13, "desc" ]],
      footerCallback: function ( row, data, start, end, display ) {
        var api = this.api()

        var intVal = function ( i ) {
          return typeof i === 'string' ?
          i.replace(/[\$,]/g, '')*1 :
          typeof i === 'number' ?
          i : 0;
        };

        var jan = api
          .column(1)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var fev = api
          .column(2)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var mar = api
          .column(3)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var abr = api
          .column(4)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var mai = api
          .column(5)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var jun = api
          .column(6)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var jul = api
          .column(7)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var ago = api
          .column(8)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var set = api
          .column(9)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var out = api
          .column(10)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var nov = api
          .column(11)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var dez = api
          .column(12)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        var total = api
          .column(13)
          .data()
          .reduce( function (a, b) {
            return intVal(a) + intVal(b)
        }, 0)

        $(api.column(0).footer()).html('<b>Total</b>');
        $(api.column(1).footer()).html('<b>' + jan + '</b>');
        $(api.column(2).footer()).html('<b>' + fev + '</b>');
        $(api.column(3).footer()).html('<b>' + mar + '</b>');
        $(api.column(4).footer()).html('<b>' + abr + '</b>');
        $(api.column(5).footer()).html('<b>' + mai + '</b>');
        $(api.column(6).footer()).html('<b>' + jun + '</b>');
        $(api.column(7).footer()).html('<b>' + jul + '</b>');
        $(api.column(8).footer()).html('<b>' + ago + '</b>');
        $(api.column(9).footer()).html('<b>' + set + '</b>');
        $(api.column(10).footer()).html('<b>' + out + '</b>');
        $(api.column(11).footer()).html('<b>' + nov + '</b>');
        $(api.column(12).footer()).html('<b>' + dez + '</b>');
        $(api.column(13).footer()).html('<b>' + total + '</b>');

      }
  });
}

// Gerar Relatório Sintético de Chamados SAP
function gerarRelChamadosSapStatus() {

  var dataInicio = $('#dataInicial').val()
  var dataFinal = $('#dataFinal').val()

  if(dataInicio == ''){
    $('#dataInicial').focus()
  }else if(dataFinal == ''){
    $('#dataFinal').focus()
  }else{

    periodoString = 'Periodo: ' + convertDate(dataInicio) + ' à ' + convertDate(dataFinal)

    $('#tabelaChamadosSapStatus').append("<tfoot style='display:none;'><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></tfoot>")
    var table = $("#tabelaChamadosSapStatus").dataTable({
      bProcessing: true,
      serverSide: false,
      destroy: true,
      sAjaxSource: "ajax/chamados_sap_status.php?dataInicial="+dataInicio+"&dataFinal="+dataFinal,
      dom:
        'Bfrtip',
        lengthMenu: [
            [ 25, 50, 100 -1 ],
            [ '25 linhas', '50 linhas', '100 linhas', 'Exibir tudo' ]
        ],
        buttons: [
            {
                extend: 'pageLength',
                text: 'Exibir 25 linhas'
            },
            {
                extend: 'copyHtml5',
                text: 'Copiar',
                className: 'btn btn-primary'
            },
            {
                extend: 'csvHtml5',
                text: 'CSV',
                title: 'Relatorio Sintético Mensal SAP - ' + periodoString,
                className: 'btn btn-primary'
            },
            {
                extend: 'pdfHtml5',
                text: 'PDF',
                title: 'Relatorio Sintético Mensal SAP - ' + periodoString,
                className: 'btn btn-primary',
                orientation: 'landscape',
                pageSize: 'A4',
                footer: true,
                exportOptions: {
                  columns: ':visible',
                  search: 'applied',
                  order: 'applied'
                },
                customize: function(doc){

                  doc.content[1].table.widths = ['25%', '15%', '15%', '15%', '15%', '15%']
                  doc.content.splice(0,1);

                  logoMarron

                  doc.pageMargins = [20,60,20,30];
                  doc.defaultStyle.fontSize = 10;
                  doc.styles.tableHeader.fontSize = 10;

                  doc['header'] = (function() {
                    return {
                      columns: [
                        {
                          alignment: 'left',
                          image: logoMarron,
                          width: 200,
                        },
                        {
                          alignment: 'right',
                          text: 'Relatorio Sintético Mensal SAP - ' + periodoString,
                          fontsize: 14,
                          margin: [20,5]
                        },
                      ],
                      margin: 20
                    }
                  });

                  doc['footer'] = (function(page, pages) {
                    return {
                      columns: [
                        {
                          alignment: 'left',
                          text: ['Pagina ', { text: page.toString() },	' de ',	{ text: pages.toString() }]
                        },
                        {
                          alignment: 'center',
                          text: ['Relatório gerado através do Sistema GLPI']
                        },
                        {
                          alignment: 'right',
                          text: [jsDate.toString()]
                        }
                      ],
                      margin: [20,0,20,0]
                    }
                  });

                  var objLayout = {};
                  objLayout['hLineWidth'] = function(i) { return .5; };
                  objLayout['vLineWidth'] = function(i) { return .5; };
                  objLayout['hLineColor'] = function(i) { return '#aaa'; };
                  objLayout['vLineColor'] = function(i) { return '#aaa'; };
                  objLayout['paddingLeft'] = function(i) { return 4; };
                  objLayout['paddingRight'] = function(i) { return 4; };
                  doc.content[0].layout = objLayout;

                }
            },
        ],
        aoColumns: [
          {
            sTitle: 'Categoria',
            mData: 'Categoria'
          },
          {
            sTitle: 'Aberto',
            mData: 'Aberto'
          },
          {
            sTitle: 'Processando',
            mData: 'Processando'
          },
          {
            sTitle: 'Pendente',
            mData: 'Pendente'
          },
          {
            sTitle: 'Fechado',
            mData: 'Fechado'
          },
          {
            sTitle: 'Total',
            mData: 'Total'
          }
        ],
        language: {
            "sProcessing":   "Carregando..."
        },
        aaSorting: [[ 5, "desc" ]],
        footerCallback: function ( row, data, start, end, display ) {
          var api = this.api()

          var intVal = function ( i ) {
            return typeof i === 'string' ?
            i.replace(/[\$,]/g, '')*1 :
            typeof i === 'number' ?
            i : 0;
          };

          var aberto = api
            .column(1)
            .data()
            .reduce( function (a, b) {
              return intVal(a) + intVal(b)
          }, 0)

          var processando = api
            .column(2)
            .data()
            .reduce( function (a, b) {
              return intVal(a) + intVal(b)
          }, 0)

          var pendente = api
            .column(3)
            .data()
            .reduce( function (a, b) {
              return intVal(a) + intVal(b)
          }, 0)

          var fechado = api
            .column(4)
            .data()
            .reduce( function (a, b) {
              return intVal(a) + intVal(b)
          }, 0)

          var total = api
            .column(5)
            .data()
            .reduce( function (a, b) {
              return intVal(a) + intVal(b)
          }, 0)

          $(api.column(0).footer()).html('<b>Total</b>');
          $(api.column(1).footer()).html('<b>' + aberto + '</b>');
          $(api.column(2).footer()).html('<b>' + processando + '</b>');
          $(api.column(3).footer()).html('<b>' + pendente + '</b>');
          $(api.column(4).footer()).html('<b>' + fechado + '</b>');
          $(api.column(5).footer()).html('<b>' + total + '</b>');

        }
    });
  
  }
}


// Gerar Relatório de Equipamentos em Manutenção
function gerarRel() {

  var dados = $('#manEquipamentos').serialize()

  $('#tabela').dataTable({
    bProcessing: true,
    sAjaxSource: "ajax/equip_manutencao.php?empresa="+dados,
    destroy: true,
    dom: 'Bfrtip',
        lengthMenu: [
            [ 10, 25, 50, -1 ],
            [ '10 linhas', '25 linhas', '50 linhas', 'Exibir tudo' ]
        ],
        buttons: [
            {
                extend: 'pageLength',
                text: 'Exibir 10 linhas'
            },
            {
                extend: 'copyHtml5',
                text: 'Copiar',
                className: 'btn btn-primary'
            },
            {
                extend: 'csvHtml5',
                text: 'CSV',
                title: 'Relatorio de equipamentos em manutenção',
                className: 'btn btn-primary'
            },
            {
                extend: 'pdfHtml5',
                text: 'PDF',
                title: 'Relatorio de equipamentos em manutenção',
                className: 'btn btn-primary',
                orientation: 'landscape',
                pageSize: 'A4',
                footer: true,
                exportOptions: {
                  columns: ':visible',
                  search: 'applied',
                  order: 'applied'
                },
                customize: function(doc){

                  doc.content[1].table.widths = ['6%', '35%', '23%', '18%', '18%']
                  doc.content.splice(0,1);

                  logoMarron
                  doc.pageMargins = [20,60,20,30];
                  doc.defaultStyle.fontSize = 10;
                  doc.styles.tableHeader.fontSize = 10;

                  doc['header'] = (function() {
                    return {
                      columns: [
                        {
                          alignment: 'left',
                          image: logoMarron,
                          width: 200,
                        },
                        {
                          alignment: 'right',
                          text: 'Relatorio de equipamentos em manutenção',
                          fontsize: 14,
                          margin: [20,5]
                        },
                      ],
                      margin: 20
                    }
                  });

                  doc['footer'] = (function(page, pages) {
                    return {
                      columns: [
                        {
                          alignment: 'left',
                          text: ['Pagina ', { text: page.toString() },	' de ',	{ text: pages.toString() }]
                        },
                        {
                          alignment: 'center',
                          text: ['Relatório gerado através do Sistema GLPI ']
                        },
                        {
                          alignment: 'right',
                          text: [jsDate.toString()]
                        }
                      ],
                      margin: [20,0,20,0]
                    }
                  });

                  var objLayout = {};
                  objLayout['hLineWidth'] = function(i) { return .5; };
                  objLayout['vLineWidth'] = function(i) { return .5; };
                  objLayout['hLineColor'] = function(i) { return '#aaa'; };
                  objLayout['vLineColor'] = function(i) { return '#aaa'; };
                  objLayout['paddingLeft'] = function(i) { return 4; };
                  objLayout['paddingRight'] = function(i) { return 4; };
                  doc.content[0].layout = objLayout;

                }
            },
        ],
    aoColumns: [
      {sTitle: 'ID', mData: 'ID'},
      {sTitle: 'Nome', mData: 'Nome'},
      {sTitle: 'Numero de Série', mData: 'NumSerie'},
      {sTitle: 'Enviado Manutenção', mData: 'Modificado'},
      {sTitle: 'Tempo na Manutenção', mData: 'Tempo'}
    ],
    order: [[ 4, "desc" ]]

  });
}

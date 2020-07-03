<h1 align="center">Instrucciones para iniciar un proyecto 👋</h1>
<p> 
  Se veran 2 maneras de iniciar un proyecto: iniciar desde cero un proyecto, o clonar o forkear un proyecto
</p>

## Creando un proyecto de cero

- Creo la carpeta con el nombre del proyecto
- Abro la git bash adentro de esa carpeta
- En la consola esccribo: `git init`
- Completo los datos q me pide
- Se crea una carpeta oculta llamada .git (no tocar nada de adentro)
- Hacer las configuraciones (`git config user.name "tu nombre"` y el correo `git config user.email "tu email"`)
- Crear los archivos y carpetas del proyecto (index.html, carpeta styles, styles.css, carpeta js, main.js, carpeta img, etc)
- Inicio sesión en github y creo un repositorio en mi cuenta
- Copiar link del repositorio (ej.: http://mi-repositorio.git)
- Agrego origin en mi repsitorio local(desde la git bash en la carpeta de mi proyecto): `git remote add origin http://mi-repositorio.git`
- Uso comando para ver que se agrego correctamente: `git remote --v`
- Ejecuto comandos: 1- `git status`,
  2- `git add`,
  3- `git commit -m "First commit"`,
  4- `git push origin master`

## Clonando proyecto ya creado

- Voy al repositorio del proyecto en github
- Copio la url del repositorio
- Creo carpeta para el proyecto en mi ordenador
- Abro la git bash: `git clone "url del repositorio en github"`

## Forkeando proyecto ya creado

- Voy al repositorio del proyecto en github
- Hago click en el boton que dice fork
- Ya tengo el repositorio forkeado en mis repositorios(puedo clonar el repositorio en mi ordenador con el comando: `git clone "url de mi repositorio (el q acabo de forkear)"`)

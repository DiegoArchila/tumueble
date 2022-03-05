### tumueble.com 
La idea de este proyecto es desarrollar una tienda virtual de venta de muebles, camas, peinadores, etc.
Proyecto para Digital House.

Se aplica la metodología mobile first.
Las vistas son solo en mobile hasta el momento.

### Info para testeo
Se pueden crear usuarios.

perfil de admin para login:
- Email = admin@tumueble.com
- password = Admin.12345

###### Herramientas usadas hasta el momento:
- HTML
- CSS (BEM)
- JavaScript desde el Back
- NodeJS (Express, express-validator,express-session, Multer, EJS) 

###### Se manejaran 3 niveles de accesos como:
- Publicos
- Usuarios comunes
- Admin

###### Vistas funcionales
- /
- /login
- /logout(get) No hay vista, solo cierra sesion en caso que estes logueado, si no lo estas te redirecciona a /
- /user/create
- /user/dashboard
- /user
- /admin/dashboard
- /admin/products
- /admin/products/create
- /admin/components
- /admin/user

##### Servidor de pruebas:
http://diarchila-tumueble.herokuapp.com/

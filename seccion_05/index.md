# Pruebas automáticas - Unit testing

Es importante escribir las pruebas automáticas, aunque puede parecer abrumador, pero con el tiempo se vuelve una práctica esencial para garantizar la calidad y estabilidad del código. En esta sección.

## Temas de la sección

- Vitest
- Vitest UI
- Índice de cobertura
- Describre y Test
- Espías
- Mock
- Mock sobre componentes
- Depuración en consola
- Snapshots
- Esperar argumentos especificos en funciones
- Integración con Testing Library

## Introducción

Las pruebas automáticas no son una perdida de tiempo, valen la pena porque garantizan la calidad del código, detectan errores, facilitan mantenimiento, aceleran desarrollo con integraciones continuas y despliegues seguros.

Si no hacemos pruebas no podemos estar seguros que la aplicación funciona como esperamos.

### Tipos de pruebas

- Unitarias: Enfocada en partes atómicas (como trabaja una función).
- Integración: ¿Cómo reaccionan varias piezas en conjunto?
- E2E End to End: Ejecuta todo un flujo contínuo como si fuera el proceso que realizaría un usuario.

Principalmente debemos de enfocarnos en las pruebas unitarias, empezando por las piezas más pequeñas.

#### Unitarias

- Son pruebas atómicas simples.
- Se recomienda no tener dependencias de otros componentes.
- Debe de ser especializada en la pieza que estamos probando.

#### Integración

- ¿Cómo funcionan elementos en conjunto?
- No deben de ser mayores a las unitarias.

#### E2E END TO END

- Un flujo aislado
- Objetivo especifico
- Pruebas de casos improbables

### Características de las pruebas

TODA pruebas automática debe de respetar:

- Fáciles de escribir
- Fáciles de leer
- Rápidas
- Flexibles

### Organización de una prueba

Toda prueba debe seguir esta estructura.

Arrange (arreglar): 
   - Importaciones
   - Inicializaciones
   - Ejemplo: Colocar las bolas de billar en la mesa. 
Act (actuar):
   - Aplicar estímulos
   - Llamar métodos
   - Simular clicks
   - Ejemplo: El estímulo es el golpear la pelota blanca.
Assert (afirmar):
   - ¿Qué debe de haber sucedido?
   - Ejemplo: ¿Que pasa si golpie la pelota fuerte, dio el resultado esperado?

### Mitos

- Hacen que mi aplicación sea más lenta. **Falso** El código de las pruebas no llega a producción.
- Las pruebas automáticas no puden fallar. **Falso** Es un código que nosotros escribimos, por lo que es posible que falle.
- Hacen que mi aplicación no tenga errores. **Falso** Las pruebas verifican que lo probado funciona bien, si algo no se probó podría fallar.
- Es una perdida de tiempo. **Falso** Se ahorra tiempo en detectar problemas, no tener que realizar hotfix, una vez escrita la prueba no es necesario probar manualmente con cada cambio.
- Hay que probar todo. **Falso** Se debe de priorizar la ruta crítica, los tiempos se pueden duplicar al querer hacer testing sobre todo, se puede ir con el tiempo expandiendo.


### Coverage - Cobertura

- Cobertura de líneas: Porcentaje de líneas ejecutadas.
- Cobertura de ramas: Porcentaje de ramas de decisión probadas.
- Cobertura de funciones: Porcentaje de funciones/métodos invocados.
- Cobertura de condiciones: Porcentaje de condiciones evaluadas en ambos sentidos.

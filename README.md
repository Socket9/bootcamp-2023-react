# Desafío 3, Desarrollar una aplicación que permite listar los turnos de los cliente de un banco.

Considerar qué hay diferentes tipos de turnos:
  - Turnos para caja
  - Turnos para oficial
  - Turnos online

Cada turno tiene mínimo la siguiente información:
  - Fecha del turno
  - Tipo de turno
  - Motivo: una descripción del motivo de turno: ej "baja de cuenta", "retiro de productos”,  etc.

Cada turno puede tener sus particularidades.
  - Si es un Turno de oficial deberá tener:
    - Nombre y Apellido del oficial
  - En el caso de ser online deberá tener:
    - Fecha y hora programada del turno
    - Fecha y hora de finalización.

Usar:
  - Barra de navegación.
  - Componente para crear los turnos
  - Manejo de estados (Redux o RXJS)

_Nota: El componente que liste los turnos deberá permitir atender un turno: y cuando esto suceda se deberá dejar constancia de la fecha de atención._

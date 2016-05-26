  'use strict';

/**
 * @ngdoc service
 * @name Asura.language
 * @description
 * # language
 * Service in the Asura.
 */

var en = {
  menu:{
    configuracion: {
      item1: 'Configuration',
      item2: 'Positions',
      item3: 'Users',
      item4: 'Kiosk logic',
      item5: 'Styles',
      item6: 'Security',
      item7: 'Requests for access',
    },
    planificacion: {
      item1: 'Planing',
      item2: 'Locales / Kiosks',
      item3: 'Clients and hierarchies',
      item4: 'Care group',
      item5: 'Logic',
    },
    video: {
      item1: 'Video',
      item2: 'Playlist Locales',
      item3: 'Playlist of Youtube',
    },
    atencion: {
      item1: 'Customer service',
      item2: 'Module of attention',
      item3: 'Supervision',
      item4: 'Alert messages',
    },
    reportes: {
      item1: 'Reports',
      item2: 'Scope of turns',
      item3: 'Origin of shifts',
      item4: 'Average attention',
      item5: 'Frequency processed',
      item6: 'Saturation',
    },
  },
  home: {
    titulo: {
      var1: 'Welcome',
      var2: 'to Qmatiq Console',
    },
    configuracion: {
      titulo: 'Configuration',
      descripcion: 'Administrate roles, users,<br>styles, and the security configuration<br>of the applications.',
    },
    planificacion: {
      titulo: 'Planning',
      descripcion: 'Define locations, customer<br>assistance areas, hierarchies, criteria,<br>and logic to be implemented.',
    },
    video: {
      titulo: 'Video',
      descripcion: 'Organize videos to be shown<br>to your customers on the<br>monitors while waiting in your locations.',
    },
    atencion: {
      titulo: 'Customer service',
      descripcion: 'Use our tools in order to<br>simplify the attention process and reduce<br>waiting times.',
    },
    reportes: {
      titulo: 'Reports',
      descripcion: 'Use powerful statistical filters<br>in order to monitor<br>client activity.',
    },
  },
  pagina:{
    configuracion:{
      index: {
        titulo: {
          var1: 'Configure',
          var2: 'general system parameters',
        },
        item:{
          roles: {
            titulo: 'Positions',
            descripcion: 'Manage the positions required<br>by your organization in order to<br>administrate waiting lines.',  
          },
          usuarios: {
            titulo: 'Users',
            descripcion: 'Add, eliminate, or edit<br>users who are responsible<br>for system administration.',  
          },
          logica: {
            titulo: 'Kiosk logic',
            descripcion: 'Establish routines to be<br>used by visitors in order to<br>identify themselves at the kiosks.',  
          },
          estilos: {
            titulo: 'Styles',
            descripcion: 'Modify some of the characteristics<br>in order to personalize Qmatiq´s<br>applications to your company’s style.',  
          },
          seguridad: {
            titulo: 'Security',
            descripcion: 'Configure the frequency with<br>which authorization codes and<br>other security aspects will be sent.',  
          },
          peticiones: {
            titulo: 'Requests for access',
            descripcion: 'List of authorization codes and<br>passwords requested from<br>unknown addresses.',  
          }
        }
      },
      roles: {
        titulo: {
          var1: 'What',
          var2: 'positions',
          var3: 'does your business have?',

        },
        boton: 'Add positions',
        tabla: {
          titulo: {
            columna1: 'Name of position',
          }
        },
        slide: {
          titulo_crear: 'Create Rol',
          titulo_editar: 'Edit Rol',
          form : {
            label1: 'Name of Rol',
            tabla: {
              titulo: {
                columna1: 'Permits',
                columna2: 'Restore',
              }
            }
          }
        }
      },
      usuarios: {
        titulo: {
          var1: 'What',
          var2: 'users',
          var3: 'does your organization require?',
        },
        label1: 'Designated location',
        select_option_0: 'All',
        boton: 'Add user',
        tabla: {
          titulo: {
            columna1: 'User name',
            columna2: 'Assigned position',
            columna3: 'Locations',
          }
        },
        slide: {
          titulo_crear: 'Add User',
          titulo_editar: 'Edit User',
          form : {
            label1: 'User name',
            label2: 'Email',
            label3: 'Limit access to designated locations',
            tabla: {
              titulo: {
                columna1: 'Locations',
              }
            }
          }
        }
      },
      logica: {
        titulo: {
          var1: 'How does your',
          var2: 'kiosk',
          var3: 'work?',
        },
        contenido: {
          item1: {
            titulo: 'Data entry mechanisms:',
            check: {
              item1: 'Bar codes',
              item2: 'Magnetic strip code',
              item3: 'Keyboard entry code',
            },
          },
          item2: {
            titulo: 'Alternative identification method:',
            radio:{
              item1: 'Identification required',
              item2: 'No Identification required',
            },
          },
          item3: {
            titulo: 'Time required for kiosk re-start:',
            label1: 'Seconds',
          },
          item4: {
            titulo: 'Tolerance kiosco:',
            label1: 'Seconds',
          },
        }
      },
      estilos: {
        titulo: {
          var1: 'What',
          var2: 'styles',
          var3: 'do you wish to use for your applications?',
        },
        tabla: {
          titulo: {
            columna1: 'Styles for applications Qmatiq',
          },
          cuerpo: {
            fila1: 'Qmatiq Console',
            fila2: 'Qmatiq Kiosk - Welcome',
            fila3: 'Qmatiq Kiosk - Identification',
            fila4: 'Qmatiq Kiosk - Escaneo',
            fila5: 'Qmatiq Kiosk - Menu and Administration',
            fila6: 'Qmatiq Video',
            fila7: 'Qmatiq Mobile',
          }
        },
        slide: {
          consola: {
            titulo: 'Edit console styles',
            clear: 'Restore',
            tab: {
              item1: {
                titulo: 'General',
                form: {
                  label1: 'Logo1',
                  label2: 'Logo2',
                  grupo1:{
                    titulo: 'Main colors (#000000)',
                    label1: 'Back...',
                    label2: 'Text',
                  },
                  grupo2:{
                    titulo: 'Secondary colors (#000000)',
                    label1: 'Back...',
                    label2: 'Text',
                  },
                },
              },
            }
          },
          kioscos: {
            titulo: 'Edit kiosk styles',
            clear: 'Restore',
            tab: {
              item1: {
                titulo: 'General',
                form: {
                  label1: 'Logo',
                  label2: 'Kiosk',
                  label3: 'Arrows',
                  label4: 'Back...',
                  label5: 'Animation',
                }
              },
              item2: {
                titulo: 'Texts',
                form: {
                  label1: 'Line 1',
                  label2: 'Line 2',
                  label3: 'Line 3',
                  label4: 'Line 4',
                  label5: 'Line 5',
                  label6: 'Origen X',
                  label7: 'Origen Y',
                  label8: 'Display script',
                  label9: 'Animation',
                }
              },
              item3: {
                titulo: 'Buttons',
                form: {
                  grupo1: {
                    titulo: 'Enter document number',
                  },
                  grupo2: {
                    titulo: 'No document',
                  },
                  label1: 'Icon',
                  label2: 'Line 1',
                  label3: 'Line 2',
                  label4: 'Text color',
                  label5: 'Button color',
                }
              },
              item4: {
                titulo: 'Menu',
                form: {
                  label1: 'Back...',
                  check: {
                    item1: 'Activate button transparency',
                    item2: 'Replace button colors',
                    item3: 'Activate button outlines',
                  }
                }
              },
            }
          },
          videos: {
            titulo: 'Edit video presentation styles',
            clear: 'Restore',
            tab: {
              item1: {
                titulo: 'General',
                form: {
                  grupo1: {
                    titulo: 'Presentation format',
                    radio: {
                      item1: '3 Turns (Horizontal in initials)',
                      item2: '4 Turns (Horizontal in initials)',
                      item3: '6 Turns (Horizontal in initials)',
                      item4: '8 Turns (Horizontal in initials)',
                      item5: '10 Turns (Vertical in words)',
                    }
                  },
                  grupo2: {
                    titulo: 'Bell sounds',
                    check: 'Activate',
                  }
                }
              },
              item2: {
                titulo: 'Colors',
                form: {
                  label1: 'Configure colors (#000000)',
                  label2: 'Background bar color',
                  label3: 'Turn color (Initials)',
                  label4: 'Areas of attention color',
                  label5: '(Text over colored arrows)',
                }
              },
            }
          },
          movil: {
            titulo: 'Edit mobile application style',
            clear: 'Restore',
            tab: {
              item1: {
                titulo: 'General',
                form: {
                  label1: 'Logo',
                  label2: 'Institutional color (Background)',
                  label3: 'Company name (Line 1)',
                  label4: 'Company name (Line 2)',
                },
              },
            }
          },
        }
      },
      seguridad: {
        titulo: {
          var1: 'What',
          var2: 'security',
          var3: 'configuration will you utilize?',
        },
        tabla: {
          titulo: {
            columna1: 'Security options',
            columna2: 'Frequency',
          },
          cuerpo: {
            fila1: {
              columna1: 'Update authentication code',
            },
            fila2: {
              columna1: 'Update code in videos',
            },
          }
        },
        slide: {
          titulo1: 'Security code activation',
          titulo2: 'Kiosk code activation',
          check: {
            item1: 'Do not activate',
            item2: 'Activate once a month',
            item3: 'Activate once a week',
            item4: 'Activate once a day ',
            item5: 'Activate in',
            item5_1: 'days',
            item6: 'Date of next activation',
          }
        },
      },
      peticiones: {
        titulo: {
          var1: 'What',
          var2: 'access',
          var3: 'request have been received?',
        },
        tabla: {
          titulo: {
            columna1: 'User name',
            columna2: 'Assigned position',
            columna3: 'Locations',
          }
        },
        slide:{
          titulo: 'Request response',
          form: {
            text1: 'This access request was generated by<br>',
            text2: 'while attempting to enter<br>',
            text3: 'from an unknown location',
            label1: 'Select action',
            label2: 'Send email'
          }
        }
      }
    },
    planificacion: {
      index: {
        titulo:{
          var1: 'Plan',
          var2: 'criteria and logic involved in customer service'
        },
        item:{
          locales: {
            titulo: 'Locales / Kiosks',
            descripcion: '<p>Enter the places of business<br>constituting your business<br>including locations and kiosk codes.</p>',  
          },
          jerarquia: {
            titulo: 'Clients and hierarchies',
            descripcion: '<p>Activate client data base<br>and organize client types<br>by hierarchy.</p>',  
          },
          atencion: {
            titulo: 'Care group',
            descripcion: '<p>Define what the hierarchies will be<br>or the customer service categories<br>to be displayed on the tickets.</p>',  
          },
          logica: {
            titulo: 'Logic',
            descripcion: '<p>Configure how each function of<br>the application’s criteria affects<br>the waiting lines.</p>',  
          }
        }
      },
      locales: {
        titulo: {
          var1: 'What',
          var2: 'locations',
          var3: 'shall have Qmatiq?',
        },
        boton: 'Add place of business',
        tabla: {
          titulo: {
            columna1: 'Name of place',
            columna2: 'Kiosk code',
            columna3: 'Location',
          }
        },
        slide: {
          titulo1: 'Add location',
          titulo2: 'Edit location',
          form: {
            label1: 'Name of place of business',
            label2: 'Windows or areas of attention (Ej: 1,2,3,A,B,C)',
            label3: 'Kiosk code',
            label4: 'Location of place of business',
          }
        }
      },
      jerarquia: {
        titulo: {
          var1: 'Who are your',
          var2: 'clients and what are their hierarchies',
          var3: '?',
        }
      },
      atencion: {
        titulo: {
          var1: 'What',
          var2: 'customer service groups',
          var3: 'are you offering?',
        },
        boton: 'Add customer service group',
        tabla: {
          titulo: {
            columna1: 'Customer service group',
            columna2: 'Initial',
            columna3: 'Color',
          }
        },
        slide: {
          titulo1: 'Add customer service group',
          titulo2: 'Edit customer service group',
          form: {
            label1: 'Customer service group',
            label2: 'Initial',
            label3: 'Color (#000000)',
          }
        }
      },
      logica: {
        titulo: {
          var1: 'What',
          var2: 'logic',
          var3: 'will you use for customer service?',
        },
        tabla: {
          titulo: {
            columna1: 'Place of business name',
            columna2: 'Publish',
          }
        },
        slide: {
          titulo: 'Edit logic',
          tabla: {
            titulo: {
              columna1: 'Customer service groups',
              columna2: 'Hierarchies'
            }
          }
        }
      },
    },
    video: {
      index: {
        titulo: {
          var1: 'Manage',
          var2: 'Videos',
          var3: 'from your server or Internet channel' 
        },
        item: {
          playlist: {
            titulo: 'Playlist Locales',
            descripcion: '<p>Configure code in order to<br>embed or insert Playlists<br>from your Youtube channel.</p>'
          } 
        }
      },
      playlist: {
        titulo: {
          var1: 'What',
          var2: 'playlist',
          var3: 'do you wish to show from Youtube?'
        },
        boton: 'Add playlist',
        tabla: {
          titulo: {
            columna1: 'Playlist name',
            columna2: 'Activate'
          }
        },
        slide: {
          titulo1: 'Add playlist',
          titulo2: 'Edit playlist',
          form: {
            label1: 'Playlist name',
            label2: 'Code used for embedding'
          }
        }
      }
    },
    atencion: {
      index: {
        titulo: {
          var1: 'Attend',
          var2: 'your customers with eased'
        },
        item: {
          modulo: {
            titulo: 'Module of attention',
            descripcion: '<p>Use our tools to<br>simplify and reduce care<br>wait time.</p>'
          },
          supervision: {
            titulo: 'Supervision',
            descripcion: '<p>Monitor user activity and<br>performance in each<br>area of attention.</p>'
          },
          mensaje: {
            titulo: 'Alert messages',
            descripcion: '<p>Create and publish messages<br>to be read by your clients at<br>kiosks and in the mobile app.</p>'
          },
        }
      }
    },
    reportes: {
      index: {
        titulo: {
          var1: 'Consult our',
          var2: 'reports',
          var3: 'of activities rendered'
        },
        item: {
          alcance: {
            titulo: 'Scope of turns',
            descripcion: '<p>Review number of clients attended<br>by location, window,<br>hierarchy, criteria and date.</p>',
          },
          origen: {
            titulo: 'Origin of shifts',
            descripcion: '<p>Review number of clients missed<br>by location, window,<br>hierarchy, criteria and date.</p>',
          },
          promedio: {
            titulo: 'Average attention',
            descripcion: '<p>Check the number of tickets printed by location, customer service window or module, hierarchy, criteria and date.</p>',
          },
          frecuencia: {
            titulo: 'Frequency processed',
            descripcion: '<p>Check the number of QR scans rendered by the App by location, customer service window or module, hierarchy, criteria and date.</p>',
          },
          saturacion: {
            titulo: 'Saturation',
            descripcion: '<p>Check the number of tickets generated by the App by location, customer service window or module, hierarchy, criteria and date.</p>',
          },
        }
      },
      alcance: {
        titulo : {
          var1: 'What was the',
          var2: 'Scope',
          var3: 'in the attention of',
          var4: 'Shifts',
          var5: '?'
        }
      },
      origen: {
        titulo : {
          var1: 'Which is the',
          var2: 'Origin',
          var3: 'of the',
          var4: 'Shifts',
          var5: 'catered?'
        }
      },
      promedio: {
        titulo : {
          var1: 'How many',
          var2: 'Tickets',
          var3: 'They were',
          var4: 'Printed matter',
          var5: '?'
        }
      },
      frecuencia: {
        titulo : {
          var1: 'Which are the',
          var2: 'Averages',
          var3: 'in the attention of',
          var4: 'Shifts',
          var5: '?'
        }
      },
      saturacion: {
        titulo : {
          var1: 'Which is the',
          var2: 'Frequency',
          var3: 'of attention',
          var4: 'Procedure',
          var5: '?'
        }
      },
    }
  }
};

var es = {
  menu:{
    configuracion: {
      item1: 'Configuración',
      item2: 'Roles',
      item3: 'Usuarios',
      item4: 'Lógica de kioscos',
      item5: 'Estilos',
      item6: 'Seguridad',
      item7: 'Peticiones de acceso',
    },
    planificacion: {
      item1: 'Planificación',
      item2: 'Locales / Kioscos',
      item3: 'Clientes y Jerarquías',
      item4: 'Grupo de atención',
      item5: 'Lógica',
    },
    video: {
      item1: 'Video',
      item2: 'Playlist Locales',
      item3: 'Playlist desde Youtube',
    },
    atencion: {
      item1: 'Atención',
      item2: 'Módulo de atención',
      item3: 'Supervisión',
      item4: 'Mensajes de alerta',
    },
    reportes: {
      item1: 'Reportes',
      item2: 'Alcance de los turnos',
      item3: 'Origen de los turnos',
      item4: 'Promedio de atención',
      item5: 'Frecuencia por trámite',
      item6: 'Saturación',
    },
  },
  home: {
    titulo: {
      var1: 'Bienvenido',
      var2: 'a htpGO Queuing Console',
    },
    configuracion: {
      titulo: 'Configuración',
      descripcion: 'Administra los roles, usuarios,<br>estilos y la configuración de<br>seguridad de las aplicaciones.',
    },
    planificacion: {
      titulo: 'Planificación',
      descripcion: 'Define los locales, puntos de<br>atención, jerarquías, criterios y<br>lógica a utilizar en la atención.',
    },
    video: {
      titulo: 'Video',
      descripcion: 'Organiza los videos que deseas<br>mostrar a tus clientes en las<br>pantallas de los locales.',
    },
    atencion: {
      titulo: 'Atención',
      descripcion: 'Utiliza nuestras herramientas para<br>simplificar la atención y reducir el<br>tiempo de espera.',
    },
    reportes: {
      titulo: 'Reportes',
      descripcion: 'Utiliza poderosos filtros<br>estádisticos para monitorear la<br>actividad de tus clientes.',
    },
  },
  pagina:{
    configuracion:{
      index: {
        titulo: {
          var1: 'Configura',
          var2: 'los aspectos generales del sistema',
        },
        item:{
          roles: {
            titulo: 'Roles',
            descripcion: 'Administra los roles que requiera<br>tu organización para atender la<br>administración de colas.',  
          },
          usuarios: {
            titulo: 'Usuarios',
            descripcion: 'Agrega, elimina  o edita a los<br>usuarios que serán responsables<br>de administrar el sistema.',  
          },
          logica: {
            titulo: 'Lógica de kioscos',
            descripcion: 'Establece qué mecanismos de<br>lectura utilizarán los visitantes al<br>identificarse en tus kioscos.',  
          },
          estilos: {
            titulo: 'Estilos',
            descripcion: 'Modifica algunas características<br>para personalizar las aplicaciones<br>htpGO al estilo de tu empresa.',  
          },
          seguridad: {
            titulo: 'Seguridad',
            descripcion: 'Configura la frecuencia de envío<br>de códigos de autenticación y<br>otros aspectos de seguridad.',  
          },
          peticiones: {
            titulo: 'Peticiones de acceso',
            descripcion: 'Lista de códigos de autenticidad y<br>contraseñas solicitadas desde<br>direcciones desconocidas.',  
          }
        }
      },
      roles: {
        titulo: {
          var1: '¿Qué',
          var2: 'Roles',
          var3: 'tiene tu organización?',
        },
        boton: 'Agregar rol',
        tabla: {
          titulo: {
            columna1: 'Nombre del rol',
          }
        },
        slide: {
          titulo_crear: 'Crear Rol',
          titulo_editar: 'Editar Rol',
          form : {
            label1: 'Nombre de Rol',
            tabla: {
              titulo: {
                columna1: 'Permisos',
                columna2: 'Restablecer',
              }
            }
          }
        }
      },
      usuarios: {
        titulo: {
          var1: '¿Qué',
          var2: 'Usuarios',
          var3: 'necesita tu organización?',
        },
        label1: 'Local asignado',
        select_option_0: 'Todos',
        boton: 'Agregar usuario',
        tabla: {
          titulo: {
            columna1: 'Nombre del usuario',
            columna2: 'Rol asignado',
            columna3: 'Locales',
          }
        },
        slide: {
          titulo_crear: 'Crear Usuario',
          titulo_editar: 'Editar Usuario',
          form : {
            label1: 'Nombre de usuario',
            label2: 'Correo electrónico',
            label3: 'Rol asignado',
            label4: 'Locales',
            label5: 'Limita el acceso a locales señalados',
            tabla: {
              titulo: {
                columna1: 'Locales',
              }
            }
          }
        }
      },
      logica: {
        titulo: {
          var1: '¿Cómo funcionarán tus',
          var2: 'Kioscos',
          var3: '?',
        },
        contenido: {
          item1: {
            titulo: 'Mecanismos de lectura:',
            check: {
              item1: 'Código de barras',
              item2: 'Código de banda magnética',
              item3: 'Digitación de código con teclado',
            },
          },
          item2: {
            titulo: 'Mecanismos de identificación alterna:',
            radio:{
              item1: 'Tienes que identificarte',
              item2: 'No necesitas identificarte',
            },
          },
          item3: {
            titulo: 'Tiempo de espera para reiniciar el kiosco:',
            label1: 'Segundos',
          },
          item4: {
            titulo: 'Tolerancia kiosco:',
            label1: 'Segundos',
          },
        }
      },
      estilos: {
        titulo: {
          var1: '¿Qué',
          var2: 'Estilos',
          var3: 'usas en tus aplicaciones?',
        },
        tabla: {
          titulo: {
            columna1: 'Estilos para aplicaciones htpGO',
          },
          cuerpo: {
            fila1: 'Qmatiq Console',
            fila2: 'Qmatiq Kiosk - Bienvenida',
            fila3: 'Qmatiq Kiosk - Identificación',
            fila4: 'Qmatiq Kiosk - Escaneo',
            fila5: 'Qmatiq Kiosk - Menú y Administración',
            fila6: 'Qmatiq Video',
            fila7: 'Qmatiq Mobile',
          }
        },
        slide: {
          consola: {
            titulo: 'Editar estilos para la consola',
            clear: 'Restablecer',
            tab: {
              item1: {
                titulo: 'Generales',
                form: {
                  label1: 'Logo1',
                  label2: 'Logo2',
                  grupo1:{
                    titulo: 'Colores principales (#000000)',
                    label1: 'Fondo',
                    label2: 'Textos',
                  },
                  grupo2:{
                    titulo: 'Colores secundarios (#000000)',
                    label1: 'Fondo',
                    label2: 'Textos',
                  },
                },
              },
            }
          },
          kioscos: {
            titulo: 'Editar estilos para los kioscos',
            clear: 'Restablecer',
            tab: {
              item1: {
                titulo: 'Generales',
                form: {
                  label1: 'Logotipo',
                  label2: 'Kiosco',
                  label3: 'Flechas',
                  label4: 'Fondo',
                  label5: 'Animar',
                }
              },
              item2: {
                titulo: 'Textos',
                form: {
                  label1: 'Línea 1',
                  label2: 'Línea 2',
                  label3: 'Línea 3',
                  label4: 'Línea 4',
                  label5: 'Línea 5',
                  label6: 'Origen X',
                  label7: 'Origen Y',
                  label8: 'Mostrar guión',
                  label9: 'Animar',
                }
              },
              item3: {
                titulo: 'Botones',
                form: {
                  grupo1: {
                    titulo: 'Soy Cliente',
                  },
                  grupo2: {
                    titulo: 'No soy cliente',
                  },
                  label1: 'Icono',
                  label2: 'Txt1',
                  label3: 'Txt2',
                  label4: 'Texto',
                  label5: 'Botón',
                }
              },
              item4: {
                titulo: 'Botón Ticket',
                form: {
                  label1: 'Fondo',
                  check: {
                    item1: 'Activar transparencia en botones',
                    item2: 'Reemplazar color en botones',
                    item3: 'Activar delineado en botones',
                  }
                }
              },
              item5: {
                titulo: 'Imágenes',
                form: {
                  label1: 'Fondo 1',
                  label2: 'Fondo 2',
                  label3: 'Fondo 3',
                  label4: 'Fondo 4',
                }
              },  
            }
          },
          videos: {
            titulo: 'Editar estilos para la presentación de videos',
            clear: 'Restablecer',
            tab: {
              item1: {
                titulo: 'Generales',
                form: {
                  grupo1: {
                    titulo: 'Formato de presentación',
                    radio: {
                      item1: '3 Turnos (Horizontal con iniciales)',
                      item2: '4 Turnos (Horizontal con iniciales)',
                      item3: '6 Turnos (Horizontal con iniciales)',
                      item4: '8 Turnos (Horizontal con iniciales)',
                      item5: '10 Turnos (Vertical con palabras)',
                    }
                  },
                  grupo2: {
                    titulo: 'Sonido de campana',
                    check: 'Activar',
                  }
                }
              },
              item2: {
                titulo: 'Colores',
                form: {
                  label1: 'Configuración de colores (#000000)',
                  label2: 'Color de fondo',
                  label3: 'Color de turnos (Iniciales)',
                  label4: 'Color de lugares de atención',
                  label5: '(Textos sobre las flechas de colores)',
                }
              },
            }
          },
          movil: {
            titulo: 'Editar estilos para las aplicaciones moviles',
            clear: 'Restablecer',
            tab: {
              item1: {
                titulo: 'Generales',
                form: {
                  label1: 'Logo',
                  label2: 'Color institucional (Fondo)',
                  label3: 'Nombre empresa (Línea 1)',
                  label4: 'Nombre empresa (Línea 2)',
                },
              },
            }
          },
        }
      },
      seguridad: {
        titulo: {
          var1: '¿Qué configuración de',
          var2: 'Seguridad',
          var3: 'utilizarás?',
        },
        tabla: {
          titulo: {
            columna1: 'Opciones de seguridad',
            columna2: 'Frecuencia',
          },
          cuerpo: {
            fila1: {
              columna1: 'Actualización de código de autenticación',
            },
            fila2: {
              columna1: 'Actualización de código en videos',
            },
          }
        },
        slide: {
          titulo1: 'Código de autenticación',
          titulo2: 'Código de kiosco',
          check: {
            item1: 'Nunca actualizar',
            item2: 'Actualizar una vez al mes',
            item3: 'Actualizar una vez a la semana',
            item4: 'Actualizar una vez al día',
            item5: 'Actualizar cada',
            item5_1: 'días',
            item6: 'Fecha de próxima actualización',
          }
        },
      },
      peticiones: {
        titulo: {
          var1: '¿Qué',
          var2: 'Peticiones',
          var3: 'de Acceso has recibido?',
        },
        tabla: {
          titulo: {
            columna1: 'Nombre del usuario',
            columna2: 'Rol asignado',
            columna3: 'Locales',
          }
        },
        slide:{
          titulo: 'Responder petición',
          form: {
            text1: 'Esta solicitud de acceso fue generada por<br>',
            text2: 'al intentar ingresar desde<br>',
            text3: 'una ubicación desconocida',
            label1: 'Seleccionar acción',
            label2: 'Enviar correo'
          }
        }
      }
    },
    planificacion: {
      index: {
        titulo:{
          var1: 'Planifica',
          var2: 'los criterios y la lógica involucrada en la atención'
        },
        item:{
          locales: {
            titulo: 'Locales / Kioscos',
            descripcion: '<p>Ingresa los locales que componen<br>tu negocio incluyendo sus<br>ubicaciones y códigos de kiosco.</p>',  
          },
          jerarquia: {
            titulo: 'Clientes y jerarquías',
            descripcion: '<p>Actualiza la base de datos de<br>clientes y ordena los tipos de<br>cliente por jerarquía.</p>',  
          },
          atencion: {
            titulo: 'Grupos de atención',
            descripcion: '<p>Define cuáles serán las jerarquías<br>o categorías de atención que<br>mostrarán tus tickets.</p>',  
          },
          logica: {
            titulo: 'Lógica',
            descripcion: '<p>Configura cómo afecta cada<br>criterio el funcionamiento de la<br>aplicación de colas.</p>',  
          }
        }
      },
      locales: {
        titulo: {
          var1: '¿Qué',
          var2: 'Locales',
          var3: 'contarán con htpGO?',
        },
        boton: 'Agregar local',
        tabla: {
          titulo: {
            columna1: 'Nombre del local',
            columna2: 'Código de kiosco',
            columna3: 'Ubicación',
          }
        },
        slide: {
          titulo1: 'Crear Local',
          titulo2: 'Editar Local',
          form: {
            label1: 'Nombre del Local',
            label2: 'Ventanillas o puestos (Ej: 1,2,3,A,B,C)',
            label3: 'Código de kiosco',
            label4: 'Ubicación',
          }
        }
      },
      jerarquia: {
        titulo: {
          var1: '¿Cuáles son tus ',
          var2: 'Clientes y Jerarquías',
          var3: '?',
        }
      },
      atencion: {
        titulo: {
          var1: '¿Qué',
          var2: 'Grupos de Atención',
          var3: 'ofrecerás?',
        },
        boton: 'Agregar grupo de atención',
        tabla: {
          titulo: {
            columna1: 'Grupos de atención',
            columna2: 'Inicial',
            columna3: 'Color',
          }
        },
        slide: {
          titulo1: 'Crear grupo de atención',
          titulo2: 'Editar grupo de atención',
          form: {
            label1: 'Grupo de atención',
            label2: 'Inicial',
            label3: 'Color (#000000)',
          }
        }
      },
      logica: {
        titulo: {
          var1: '¿Qué',
          var2: 'Lógica',
          var3: 'utilizarás para la atención?',
        },
        tabla: {
          titulo: {
            columna1: 'Nombre del local',
            columna2: 'Publicar',
          }
        },
        slide: {
          titulo: 'Editar lógica:',
          tabla: {
            titulo: {
              columna1: 'Grupos de atención',
              columna2: 'Jerarquías'
            }
          }
        }
      },
    },
    video: {
      index: {
        titulo: {
          var1: 'Administra ',
          var2: 'Videos',
          var3: 'desde tu servidor o canal en Internet'
        },
        item: {
          playlist: {
            titulo: 'Playlist Locales',
            descripcion: '<p>Administra y configura las listas<br>de reproduccion de los videos<br>alojados en tu propio servidor.</p>'
          },
          youtube: {
            titulo: 'Playlist de Youtube',
            descripcion: '<p>Configura el código para la<br>embebido o inserción del Playlist<br>desde tu canal de Youtube.</p>'
          }
        }
      },
      playlist: {
        titulo: {
          var1: '¿Qué',
          var2: 'Playlist',
          var3: 'deseas reproducir desde Youtube?'
        },
        boton: 'Agregar playlist',
        tabla: {
          titulo: {
            columna1: 'Nombre del Playlist',
            columna2: 'Activar'
          }
        },
        slide: {
          titulo1: 'Crear playlist',
          titulo2: 'Editar playlist',
          form: {
            label1: 'Nombre del playlist',
            label2: 'Código generado para el embebido'
          }
        }
      }
    },
    atencion: {
      index: {
        titulo: {
          var1: 'Atiende',
          var2: 'a tus clientes con facilidad'
        },
        item: {
          modulo: {
            titulo: 'Modulo de atención',
            descripcion: '<p>Utiliza nuestras herramientas para<br>simplificar la atención y reducir el<br>tiempo de espera.</p>'
          },
          supervision: {
            titulo: 'Supervisión',
            descripcion: '<p>Monitorea la actividad y<br>desempeño de los usuarios en<br>cada puesto de atención.</p>'
          },
          mensaje: {
            titulo: 'Mensaje de alerta',
            descripcion: '<p>Crea y publica mensajes para ser<br>leídos por tus clientes en el<br>kiosco y en la aplicación móvil.</p>'
          },
        }
      }
    },
    reportes: {
      index: {
        titulo: {
          var1: 'Consulta nuestros',
          var2: 'reportes',
          var3: 'sobre la actividad realizada'
        },
        item: {
          alcance: {
            titulo: 'Alcance de los turnos',
            descripcion: '<p>Revisa el número de clientes<br>atendidos por local, puesto,<br>jerarquía, criterio y fecha.</p>'
          },
          origen: {
            titulo: 'Origen de los turnos',
            descripcion: '<p>Revisa el número de clientes<br>salteados por local, puesto,<br>jerarquía, criterio y fecha.</p>'
          },
          promedio: {
            titulo: 'Promedio de atención',
            descripcion: '<p>Revisa el número de tickets impresos<br>realizados en la App por local,<br> puesto, jerarquía, criterio y fecha.</p>'
          },
          frecuencia: {
            titulo: 'Frecuencia por trámite',
            descripcion: '<p>Revisa el número de escaneos<br>realizados en la App por local,<br> puesto, jerarquía, criterio y fecha.</p>'
          },
          saturacion: {
            titulo: 'Saturación ',
            descripcion: '<p>Revisa el número de tickets impresos<br>realizados en la App por local,<br> puesto, jerarquía, criterio y fecha.</p>'
          },
        }
      },
      alcance: {
        titulo : {
          var1: '¿Cuál fue el',
          var2: 'Alcance',
          var3: 'en la atención de',
          var4: 'Turnos',
          var5: '?'
        }
      },
      origen: {
        titulo : {
          var1: '¿Cuál es el',
          var2: 'Origen',
          var3: 'de los',
          var4: 'Turnos',
          var5: 'atendidos?'
        }
      },
      promedio: {
        titulo : {
          var1: '¿Cuántos',
          var2: 'Tickets',
          var3: 'fueron',
          var4: 'Impresos',
          var5: '?'
        }
      },
      frecuencia: {
        titulo : {
          var1: '¿Cuáles son los',
          var2: 'Promedios',
          var3: 'en la atención de',
          var4: 'Turnos',
          var5: '?'
        }
      },
      saturacion: {
        titulo : {
          var1: '¿Cuál es la',
          var2: 'Frecuencia',
          var3: 'de atención por',
          var4: 'Trámite',
          var5: '?'
        }
      },
    }
  },
};

angular.module('Asura')
.config(['$translateProvider', function($translateProvider) {

  $translateProvider.translations('es', es);
  $translateProvider.translations('en', en);
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');

}]);
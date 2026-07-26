// ======================================================
// BLACK HOLD
// Archivo: script.js
// Versión sin formulario "Agregar tarea"
// ======================================================

// ======================================================
// ALMACENAMIENTO
// ======================================================

const STORAGE_KEYS = {
  tasks: "blackHoldTasks",
  settings: "blackHoldSettings",
  studyTime: "blackHoldStudyTime",
  classroomLinks: "blackHoldClassroomLinks"
};

const defaultSettings = {
  name: "Nahiara",
  course: "Estudiante",
  school: "",
  notifications: true
};

const motivationalMessages = [
  "No necesitas hacerlo todo hoy. Solo avanzar en lo más importante.",
  "La constancia vale más que una sesión perfecta.",
  "Empieza con 20 minutos. Lo más difícil es comenzar.",
  "Cada ejercicio que corriges te acerca a tu objetivo.",
  "Refuerza aquello que todavía te cuesta.",
  "Organizarte hoy te dará más tranquilidad mañana.",
  "Un pequeño avance sigue siendo un avance.",
  "Concéntrate en una tarea a la vez.",
  "Tus resultados mejoran cuando corriges tus errores.",
  "Descansar también forma parte del estudio."
];

// ======================================================
// HORARIO ESCOLAR
// ======================================================

const schoolSchedule = {
  0: [],

  1: [
    {
      name: "Matemáticas",
      start: "08:15",
      end: "09:45",
      icon: "calculate"
    },
    {
      name: "Teoría del Conocimiento",
      start: "10:05",
      end: "10:50",
      icon: "psychology"
    },
    {
      name: "Física",
      start: "10:50",
      end: "11:30",
      icon: "science"
    },
    {
      name: "Economía",
      start: "11:30",
      end: "12:50",
      icon: "payments"
    },
    {
      name: "Almuerzo",
      start: "12:50",
      end: "13:35",
      icon: "restaurant"
    },
    {
      name: "Economía",
      start: "13:35",
      end: "14:20",
      icon: "payments"
    },
    {
      name: "Class Cancel",
      start: "14:20",
      end: "15:45",
      icon: "event_busy"
    },
    {
      name: "Deporte",
      start: "15:45",
      end: "16:30",
      icon: "sports"
    }
  ],

  2: [
    {
      name: "Inglés",
      start: "08:15",
      end: "09:45",
      icon: "language"
    },
    {
      name: "Educación Ciudadana",
      start: "10:05",
      end: "10:50",
      icon: "account_balance"
    },
    {
      name: "Lenguaje",
      start: "10:50",
      end: "11:30",
      icon: "menu_book"
    },
    {
      name: "Física",
      start: "11:30",
      end: "12:10",
      icon: "science"
    },
    {
      name: "Matemáticas",
      start: "12:10",
      end: "12:50",
      icon: "calculate"
    },
    {
      name: "Teoría del Conocimiento",
      start: "13:35",
      end: "14:20",
      icon: "psychology"
    },
    {
      name: "Economía",
      start: "14:20",
      end: "15:00",
      icon: "payments"
    }
  ],

  3: [
    {
      name: "Educación Física",
      start: "08:15",
      end: "09:45",
      icon: "fitness_center"
    },
    {
      name: "Física",
      start: "10:05",
      end: "10:50",
      icon: "science"
    },
    {
      name: "Matemáticas",
      start: "10:50",
      end: "12:10",
      icon: "calculate"
    },
    {
      name: "Lenguaje",
      start: "12:10",
      end: "13:35",
      icon: "menu_book"
    },
    {
      name: "Inglés",
      start: "13:35",
      end: "14:20",
      icon: "language"
    }
  ],

  4: [
    {
      name: "Inglés",
      start: "08:15",
      end: "09:45",
      icon: "language"
    },
    {
      name: "Educación Ciudadana",
      start: "10:05",
      end: "10:50",
      icon: "account_balance"
    },
    {
      name: "Matemáticas",
      start: "10:50",
      end: "12:10",
      icon: "calculate"
    },
    {
      name: "Teatro",
      start: "12:10",
      end: "13:35",
      icon: "theater_comedy"
    },
    {
      name: "Lenguaje",
      start: "13:35",
      end: "15:00",
      icon: "menu_book"
    }
  ],

  5: [
    {
      name: "Class Cancel",
      start: "08:15",
      end: "09:45",
      icon: "event_busy"
    },
    {
      name: "Matemáticas",
      start: "10:05",
      end: "10:50",
      icon: "calculate"
    },
    {
      name: "Inglés",
      start: "10:50",
      end: "11:30",
      icon: "language"
    },
    {
      name: "Teatro",
      start: "11:30",
      end: "12:50",
      icon: "theater_comedy"
    },
    {
      name: "Lenguaje",
      start: "13:35",
      end: "15:00",
      icon: "menu_book"
    }
  ],

  6: []
};

// ======================================================
// PREUNIVERSITARIO
// ======================================================

const preUniversitySchedule = {
  0: [],

  1: [
    {
      name: "Historia",
      start: "18:10",
      end: "19:10",
      science: true
    },
    {
      name: "Matemática M1",
      start: "19:20",
      end: "20:20",
      science: false
    },
    {
      name: "Física",
      start: "20:30",
      end: "21:30",
      science: true
    }
  ],

  2: [
    {
      name: "Comprensión Lectora",
      start: "19:20",
      end: "20:20",
      science: false
    },
    {
      name: "Química",
      start: "20:30",
      end: "21:30",
      science: true
    }
  ],

  3: [
    {
      name: "Historia",
      start: "18:10",
      end: "19:10",
      science: true
    },
    {
      name: "Matemática M1",
      start: "19:20",
      end: "20:20",
      science: false
    },
    {
      name: "Física",
      start: "20:30",
      end: "21:30",
      science: true
    }
  ],

  4: [
    {
      name: "Comprensión Lectora",
      start: "19:20",
      end: "20:20",
      science: false
    },
    {
      name: "Química",
      start: "20:30",
      end: "21:30",
      science: true
    }
  ],

  5: [
    {
      name: "Matemática M1",
      start: "19:20",
      end: "20:20",
      science: false
    }
  ],

  6: []
};

// ======================================================
// MATERIAS
// ======================================================

const subjects = [
  {
    name: "Matemáticas",
    confidence: 65,
    level: "Estoy practicando"
  },
  {
    name: "Física",
    confidence: 45,
    level: "Necesito reforzarlo"
  },
  {
    name: "Lenguaje",
    confidence: 70,
    level: "Estoy practicando"
  },
  {
    name: "Inglés",
    confidence: 75,
    level: "Lo manejo bien"
  },
  {
    name: "Economía",
    confidence: 55,
    level: "Todavía me cuesta"
  }
];

// ======================================================
// VARIABLES
// ======================================================

let currentPage = "home";

let pomodoroInterval = null;
let pomodoroSeconds = 25 * 60;
let selectedPomodoroMinutes = 25;
let pomodoroRunning = false;

// ======================================================
// LOCAL STORAGE
// ======================================================

function getStorage(key, fallback) {
  try {
    const savedValue = localStorage.getItem(key);

    return savedValue
      ? JSON.parse(savedValue)
      : fallback;
  } catch (error) {
    console.error(error);
    return fallback;
  }
}

function setStorage(key, value) {
  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  } catch (error) {
    console.error(error);
  }
}

function getSettings() {
  return getStorage(
    STORAGE_KEYS.settings,
    defaultSettings
  );
}

function getTasks() {
  return getStorage(
    STORAGE_KEYS.tasks,
    []
  );
}

function getClassroomLinks() {
  return getStorage(
    STORAGE_KEYS.classroomLinks,
    {}
  );
}

// ======================================================
// FECHA Y HORA
// ======================================================

function capitalize(text) {
  if (!text) {
    return "";
  }

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1)
  );
}

function formatCurrentDate() {
  return new Intl.DateTimeFormat(
    "es-CL",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  ).format(new Date());
}

function timeToMinutes(time) {
  const [hours, minutes] = time
    .split(":")
    .map(Number);

  return hours * 60 + minutes;
}

function getCurrentMinutes() {
  const now = new Date();

  return (
    now.getHours() * 60 +
    now.getMinutes()
  );
}

function formatRemainingTime(minutes) {
  if (minutes <= 0) {
    return "Comenzando ahora";
  }

  if (minutes < 60) {
    return `Faltan ${minutes} minutos`;
  }

  const hours =
    Math.floor(minutes / 60);

  const remainingMinutes =
    minutes % 60;

  if (remainingMinutes === 0) {
    return `Faltan ${hours} h`;
  }

  return `Faltan ${hours} h ${remainingMinutes} min`;
}

function getDaySchedule() {
  return (
    schoolSchedule[
      new Date().getDay()
    ] || []
  );
}

function getTodayPreUniversity() {
  const today = new Date();

  const schedule =
    preUniversitySchedule[
      today.getDay()
    ] || [];

  const scienceStartDate =
    new Date("2026-08-03T00:00:00");

  return schedule.filter(
    (classItem) => {
      if (!classItem.science) {
        return true;
      }

      return today >= scienceStartDate;
    }
  );
}

function getNextActivity() {
  const classroomLinks =
    getClassroomLinks();

  const activities = [
    ...getDaySchedule().map(
      (item) => ({
        ...item,
        type: "Colegio",
        classroom:
          classroomLinks[item.name] || ""
      })
    ),

    ...getTodayPreUniversity().map(
      (item) => ({
        ...item,
        type: "Preuniversitario",
        icon: "school",
        classroom:
          classroomLinks[item.name] || ""
      })
    )
  ];

  activities.sort(
    (first, second) => {
      return (
        timeToMinutes(first.start) -
        timeToMinutes(second.start)
      );
    }
  );

  const currentMinutes =
    getCurrentMinutes();

  return (
    activities.find((item) => {
      return (
        timeToMinutes(item.end) >=
        currentMinutes
      );
    }) || null
  );
}

// ======================================================
// INICIO
// ======================================================

function initializeApp() {
  const app =
    document.getElementById("app");

  if (!app) {
    console.error(
      'Falta <div id="app"></div> en index.html.'
    );

    return;
  }

  renderApp();
  registerServiceWorker();

  setInterval(() => {
    if (currentPage === "home") {
      renderCurrentPage();
    }
  }, 60000);
}

function renderApp() {
  const app =
    document.getElementById("app");

  app.innerHTML = `
    <div class="app-shell">
      <main
        id="page-content"
        class="page-content"
      ></main>

      ${renderBottomNavigation()}
    </div>

    <div id="toast-container"></div>
  `;

  renderCurrentPage();
  attachNavigationEvents();
}

function renderCurrentPage() {
  const pageContent =
    document.getElementById(
      "page-content"
    );

  if (!pageContent) {
    return;
  }

  switch (currentPage) {
    case "calendar":
      pageContent.innerHTML =
        renderCalendarPage();

      attachHeaderEvents();
      break;

    case "tasks":
      pageContent.innerHTML =
        renderTasksPage();

      attachTaskEvents();
      break;

    case "study":
      pageContent.innerHTML =
        renderStudyPage();

      attachStudyEvents();
      break;

    case "profile":
      pageContent.innerHTML =
        renderProfilePage();

      attachProfileEvents();
      break;

    default:
      pageContent.innerHTML =
        renderHomePage();

      attachHomeEvents();
      break;
  }

  updateNavigationState();
}

// ======================================================
// ENCABEZADO
// ======================================================

function renderHeader(title, subtitle) {
  return `
    <header class="top-header">
      <div>
        <p class="header-label">
          ${escapeHTML(subtitle)}
        </p>

        <h1>
          ${escapeHTML(title)}
        </h1>
      </div>

      <button
        type="button"
        class="header-icon-button"
        id="notification-button"
        aria-label="Notificaciones"
      >
        <span class="material-symbols-rounded">
          notifications
        </span>
      </button>
    </header>
  `;
}

// ======================================================
// PÁGINA HOY
// ======================================================

function renderHomePage() {
  const settings = getSettings();
  const nextActivity =
    getNextActivity();
  const todayClasses =
    getDaySchedule();
  const pendingTasks =
    getTasks().filter(
      (task) => !task.completed
    );

  const messageIndex =
    new Date().getDate() %
    motivationalMessages.length;

  return `
    <section class="page home-page">
      ${renderHeader(
        `Hola, ${settings.name} 👋`,
        "BLACK HOLD"
      )}

      <div class="date-row">
        <span class="material-symbols-rounded">
          calendar_month
        </span>

        <span>
          ${capitalize(
            formatCurrentDate()
          )}
        </span>
      </div>

      <section class="hero-card">
        <div class="hero-card-top">
          <div>
            <p class="card-eyebrow">
              HOY
            </p>

            <h2>
              ${todayClasses.length}
              clases programadas
            </h2>

            <p>
              ${pendingTasks.length}
              tareas pendientes
            </p>
          </div>

          <div class="hero-date-number">
            ${new Date().getDate()}
          </div>
        </div>

        <div class="daily-progress">
          <div class="progress-label-row">
            <span>Progreso diario</span>

            <span>
              ${calculateDailyProgress()}%
            </span>
          </div>

          <div class="progress-track">
            <div
              class="progress-fill"
              style="width: ${calculateDailyProgress()}%"
            ></div>
          </div>
        </div>
      </section>

      <section class="section-block">
        <div class="section-title-row">
          <div>
            <p class="section-label">
              PRÓXIMA ACTIVIDAD
            </p>

            <h2>
              Lo que viene ahora
            </h2>
          </div>
        </div>

        ${
          nextActivity
            ? renderNextActivityCard(
                nextActivity
              )
            : renderEmptyCard(
                "event_available",
                "No tienes más actividades",
                "Puedes descansar o comenzar un repaso."
              )
        }
      </section>

      <section class="quick-actions-grid">
        <button
          type="button"
          class="quick-action-card"
          data-action="start-pomodoro"
        >
          <span class="material-symbols-rounded">
            timer
          </span>

          <strong>Pomodoro</strong>
          <small>Comenzar enfoque</small>
        </button>

        <button
          type="button"
          class="quick-action-card"
          data-action="what-now"
        >
          <span class="material-symbols-rounded">
            auto_awesome
          </span>

          <strong>
            ¿Qué estudio ahora?
          </strong>

          <small>
            Obtener recomendación
          </small>
        </button>

        <button
          type="button"
          class="quick-action-card"
          data-go-page="calendar"
        >
          <span class="material-symbols-rounded">
            calendar_month
          </span>

          <strong>Calendario</strong>
          <small>Ver la semana</small>
        </button>

        <button
          type="button"
          class="quick-action-card"
          data-action="show-preu"
        >
          <span class="material-symbols-rounded">
            school
          </span>

          <strong>Preuniversitario</strong>
          <small>Ver clases PAES</small>
        </button>
      </section>

      <section class="section-block">
        <div class="section-title-row">
          <div>
            <p class="section-label">
              HORARIO
            </p>

            <h2>Clases de hoy</h2>
          </div>
        </div>

        <div class="timeline-list">
          ${
            todayClasses.length > 0
              ? todayClasses
                  .map(
                    renderScheduleItem
                  )
                  .join("")
              : renderEmptyCard(
                  "weekend",
                  "Día libre",
                  "Hoy no tienes clases del colegio."
                )
          }
        </div>
      </section>

      ${renderPreUniversitySection()}

      <section class="motivation-card">
        <span class="material-symbols-rounded">
          bolt
        </span>

        <div>
          <p class="section-label">
            MENSAJE DEL DÍA
          </p>

          <h3>
            ${escapeHTML(
              motivationalMessages[
                messageIndex
              ]
            )}
          </h3>
        </div>
      </section>
    </section>
  `;
}

function renderNextActivityCard(
  activity
) {
  const remaining =
    timeToMinutes(activity.start) -
    getCurrentMinutes();

  return `
    <article class="next-class-card">
      <div class="next-class-icon">
        <span class="material-symbols-rounded">
          ${activity.icon || "school"}
        </span>
      </div>

      <div class="next-class-main">
        <span class="activity-type">
          ${escapeHTML(activity.type)}
        </span>

        <h3>
          ${escapeHTML(activity.name)}
        </h3>

        <p>
          ${activity.start}
          –
          ${activity.end}
        </p>

        <div class="countdown-pill">
          <span class="material-symbols-rounded">
            schedule
          </span>

          ${formatRemainingTime(
            remaining
          )}
        </div>
      </div>

      <div class="next-class-actions">
        ${
          activity.classroom
            ? `
              <a
                href="${escapeHTML(
                  activity.classroom
                )}"
                target="_blank"
                rel="noopener noreferrer"
                class="small-action-button"
              >
                Classroom
              </a>
            `
            : `
              <button
                type="button"
                class="small-action-button"
                data-add-classroom="${escapeHTML(
                  activity.name
                )}"
              >
                Agregar enlace
              </button>
            `
        }

        <button
          type="button"
          class="small-action-button secondary"
          data-study-subject="${escapeHTML(
            activity.name
          )}"
        >
          Repasar
        </button>
      </div>
    </article>
  `;
}

function renderScheduleItem(
  classItem
) {
  const currentMinutes =
    getCurrentMinutes();

  const start =
    timeToMinutes(classItem.start);

  const end =
    timeToMinutes(classItem.end);

  let status = "";

  if (
    currentMinutes >= start &&
    currentMinutes <= end
  ) {
    status = "current";
  } else if (
    currentMinutes > end
  ) {
    status = "completed";
  }

  return `
    <article
      class="timeline-item ${status}"
    >
      <div class="timeline-time">
        <strong>
          ${classItem.start}
        </strong>

        <span>
          ${classItem.end}
        </span>
      </div>

      <div class="timeline-line">
        <span></span>
      </div>

      <div class="timeline-content">
        <div class="timeline-subject-icon">
          <span class="material-symbols-rounded">
            ${classItem.icon}
          </span>
        </div>

        <div>
          <h3>
            ${escapeHTML(
              classItem.name
            )}
          </h3>

          <p>
            ${
              status === "current"
                ? "Clase actual"
                : status === "completed"
                ? "Finalizada"
                : "Próximamente"
            }
          </p>
        </div>
      </div>
    </article>
  `;
}

function renderPreUniversitySection() {
  const classes =
    getTodayPreUniversity();

  return `
    <section
      class="section-block"
      id="preuniversity-section"
    >
      <div class="section-title-row">
        <div>
          <p class="section-label">
            PAES
          </p>

          <h2>Preuniversitario</h2>
        </div>
      </div>

      <div class="preu-grid">
        ${
          classes.length > 0
            ? classes
                .map((classItem) => {
                  return `
                    <article class="preu-card">
                      <div>
                        <span class="preu-label">
                          CLASE PAES
                        </span>

                        <h3>
                          ${escapeHTML(
                            classItem.name
                          )}
                        </h3>

                        <p>
                          ${classItem.start}
                          –
                          ${classItem.end}
                        </p>
                      </div>
                    </article>
                  `;
                })
                .join("")
            : renderEmptyCard(
                "school",
                "Sin clases PAES hoy",
                "Revisa los próximos días en el calendario."
              )
        }
      </div>
    </section>
  `;
}

function calculateDailyProgress() {
  const schedule =
    getDaySchedule();

  if (schedule.length === 0) {
    return 100;
  }

  const currentMinutes =
    getCurrentMinutes();

  const completed =
    schedule.filter((item) => {
      return (
        timeToMinutes(item.end) <
        currentMinutes
      );
    }).length;

  return Math.round(
    (completed / schedule.length) *
      100
  );
}

// ======================================================
// CALENDARIO
// ======================================================

function renderCalendarPage() {
  const days = [
    {
      number: 1,
      name: "Lunes"
    },
    {
      number: 2,
      name: "Martes"
    },
    {
      number: 3,
      name: "Miércoles"
    },
    {
      number: 4,
      name: "Jueves"
    },
    {
      number: 5,
      name: "Viernes"
    }
  ];

  return `
    <section class="page calendar-page">
      ${renderHeader(
        "Calendario",
        "TU SEMANA"
      )}

      <div class="week-calendar">
        ${days
          .map((day) => {
            return `
              <section class="calendar-day-card">
                <div class="calendar-day-header">
                  <h2>
                    ${day.name}
                  </h2>

                  <span>
                    ${
                      schoolSchedule[
                        day.number
                      ].length
                    }
                    clases
                  </span>
                </div>

                <div class="calendar-event-list">
                  ${schoolSchedule[
                    day.number
                  ]
                    .map((item) => {
                      return `
                        <article class="calendar-event">
                          <div class="calendar-event-time">
                            ${item.start}
                          </div>

                          <div class="calendar-event-content">
                            <strong>
                              ${escapeHTML(
                                item.name
                              )}
                            </strong>

                            <span>
                              ${item.start}
                              –
                              ${item.end}
                            </span>
                          </div>
                        </article>
                      `;
                    })
                    .join("")}

                  ${preUniversitySchedule[
                    day.number
                  ]
                    .map((item) => {
                      return `
                        <article class="calendar-event preu-event">
                          <div class="calendar-event-time">
                            ${item.start}
                          </div>

                          <div class="calendar-event-content">
                            <strong>
                              ${escapeHTML(
                                item.name
                              )}
                            </strong>

                            <span>
                              Preuniversitario PAES
                            </span>
                          </div>
                        </article>
                      `;
                    })
                    .join("")}
                </div>
              </section>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

// ======================================================
// TAREAS SIN OPCIÓN DE AGREGAR
// ======================================================

function renderTasksPage() {
  const tasks = getTasks();

  return `
    <section class="page tasks-page">
      ${renderHeader(
        "Tareas",
        "MIS PENDIENTES"
      )}

      <div class="task-statistics">
        <article>
          <strong>
            ${
              tasks.filter(
                (task) =>
                  !task.completed
              ).length
            }
          </strong>

          <span>Pendientes</span>
        </article>

        <article>
          <strong>
            ${
              tasks.filter(
                (task) =>
                  task.completed
              ).length
            }
          </strong>

          <span>Terminadas</span>
        </article>

        <article>
          <strong>
            ${tasks.length}
          </strong>

          <span>Total</span>
        </article>
      </div>

      <div class="section-title-row">
        <div>
          <p class="section-label">
            LISTA
          </p>

          <h2>Mis tareas</h2>
        </div>
      </div>

      <div class="task-list">
        ${
          tasks.length > 0
            ? tasks
                .map(renderTaskCard)
                .join("")
            : renderEmptyCard(
                "task_alt",
                "No hay tareas registradas",
                "La sección para agregar tareas fue retirada."
              )
        }
      </div>
    </section>
  `;
}

function renderTaskCard(task) {
  return `
    <article
      class="task-card ${
        task.completed
          ? "completed"
          : ""
      }"
    >
      <button
        type="button"
        class="task-check-button"
        data-task-complete="${task.id}"
      >
        <span class="material-symbols-rounded">
          ${
            task.completed
              ? "check_circle"
              : "radio_button_unchecked"
          }
        </span>
      </button>

      <div class="task-card-content">
        <span class="subject-chip">
          ${escapeHTML(
            task.subject || "General"
          )}
        </span>

        <h3>
          ${escapeHTML(
            task.title || "Tarea"
          )}
        </h3>

        ${
          task.description
            ? `
              <p>
                ${escapeHTML(
                  task.description
                )}
              </p>
            `
            : ""
        }
      </div>

      <button
        type="button"
        class="task-delete-button"
        data-task-delete="${task.id}"
      >
        <span class="material-symbols-rounded">
          delete
        </span>
      </button>
    </article>
  `;
}

function toggleTask(taskId) {
  const tasks =
    getTasks().map((task) => {
      if (
        String(task.id) ===
        String(taskId)
      ) {
        return {
          ...task,
          completed:
            !task.completed
        };
      }

      return task;
    });

  setStorage(
    STORAGE_KEYS.tasks,
    tasks
  );

  renderCurrentPage();
}

function deleteTask(taskId) {
  const confirmed =
    window.confirm(
      "¿Quieres eliminar esta tarea?"
    );

  if (!confirmed) {
    return;
  }

  const tasks =
    getTasks().filter((task) => {
      return (
        String(task.id) !==
        String(taskId)
      );
    });

  setStorage(
    STORAGE_KEYS.tasks,
    tasks
  );

  showToast("Tarea eliminada.");
  renderCurrentPage();
}

// ======================================================
// ESTUDIAR
// ======================================================

function renderStudyPage() {
  return `
    <section class="page study-page">
      ${renderHeader(
        "Estudiar",
        "MODO CONCENTRACIÓN"
      )}

      <section class="pomodoro-card">
        <p class="section-label">
          TEMPORIZADOR
        </p>

        <h2>
          Sesión de concentración
        </h2>

        <div class="pomodoro-modes">
          <button
            type="button"
            class="pomodoro-mode ${
              selectedPomodoroMinutes === 25
                ? "active"
                : ""
            }"
            data-minutes="25"
          >
            Pomodoro
            <span>25 min</span>
          </button>

          <button
            type="button"
            class="pomodoro-mode ${
              selectedPomodoroMinutes === 50
                ? "active"
                : ""
            }"
            data-minutes="50"
          >
            Profundo
            <span>50 min</span>
          </button>

          <button
            type="button"
            class="pomodoro-mode ${
              selectedPomodoroMinutes === 15
                ? "active"
                : ""
            }"
            data-minutes="15"
          >
            Repaso
            <span>15 min</span>
          </button>
        </div>

        <div
          class="pomodoro-clock"
          id="pomodoro-clock"
        >
          ${formatTimer(
            pomodoroSeconds
          )}
        </div>

        <p
          class="pomodoro-status"
          id="pomodoro-status"
        >
          Selecciona una materia.
        </p>

        <select
          id="pomodoro-subject"
          class="app-select"
        >
          <option value="">
            Seleccionar materia
          </option>

          ${subjects
            .map((subject) => {
              return `
                <option
                  value="${escapeHTML(
                    subject.name
                  )}"
                >
                  ${escapeHTML(
                    subject.name
                  )}
                </option>
              `;
            })
            .join("")}
        </select>

        <div class="pomodoro-actions">
          <button
            type="button"
            class="primary-button"
            id="pomodoro-start"
          >
            Comenzar
          </button>

          <button
            type="button"
            class="secondary-button"
            id="pomodoro-reset"
          >
            Reiniciar
          </button>
        </div>
      </section>

      <section class="section-block">
        <div class="subjects-grid">
          ${subjects
            .map((subject) => {
              return `
                <article class="subject-progress-card">
                  <div class="subject-progress-heading">
                    <div>
                      <h3>
                        ${escapeHTML(
                          subject.name
                        )}
                      </h3>

                      <p>
                        ${escapeHTML(
                          subject.level
                        )}
                      </p>
                    </div>

                    <strong>
                      ${subject.confidence}%
                    </strong>
                  </div>

                  <div class="progress-track">
                    <div
                      class="progress-fill"
                      style="width: ${subject.confidence}%"
                    ></div>
                  </div>

                  <button
                    type="button"
                    class="subject-study-button"
                    data-study-subject="${escapeHTML(
                      subject.name
                    )}"
                  >
                    Iniciar repaso
                  </button>
                </article>
              `;
            })
            .join("")}
        </div>
      </section>
    </section>
  `;
}

function formatTimer(seconds) {
  const minutes =
    Math.floor(seconds / 60);

  const remainingSeconds =
    seconds % 60;

  return (
    String(minutes).padStart(
      2,
      "0"
    ) +
    ":" +
    String(
      remainingSeconds
    ).padStart(2, "0")
  );
}

function startPomodoro() {
  const subject =
    document.getElementById(
      "pomodoro-subject"
    )?.value;

  if (!subject) {
    showToast(
      "Selecciona una materia."
    );

    return;
  }

  if (pomodoroRunning) {
    pausePomodoro();
    return;
  }

  pomodoroRunning = true;

  const button =
    document.getElementById(
      "pomodoro-start"
    );

  if (button) {
    button.textContent = "Pausar";
  }

  pomodoroInterval =
    setInterval(() => {
      pomodoroSeconds--;

      const clock =
        document.getElementById(
          "pomodoro-clock"
        );

      if (clock) {
        clock.textContent =
          formatTimer(
            pomodoroSeconds
          );
      }

      if (pomodoroSeconds <= 0) {
        completePomodoro(subject);
      }
    }, 1000);
}

function pausePomodoro() {
  pomodoroRunning = false;

  clearInterval(
    pomodoroInterval
  );

  const button =
    document.getElementById(
      "pomodoro-start"
    );

  if (button) {
    button.textContent = "Continuar";
  }
}

function resetPomodoro() {
  clearInterval(
    pomodoroInterval
  );

  pomodoroRunning = false;

  pomodoroSeconds =
    selectedPomodoroMinutes * 60;

  const clock =
    document.getElementById(
      "pomodoro-clock"
    );

  const button =
    document.getElementById(
      "pomodoro-start"
    );

  if (clock) {
    clock.textContent =
      formatTimer(
        pomodoroSeconds
      );
  }

  if (button) {
    button.textContent = "Comenzar";
  }
}

function completePomodoro(subject) {
  clearInterval(
    pomodoroInterval
  );

  const currentStudyTime =
    getStorage(
      STORAGE_KEYS.studyTime,
      0
    );

  setStorage(
    STORAGE_KEYS.studyTime,
    currentStudyTime +
      selectedPomodoroMinutes
  );

  showToast(
    `Completaste ${selectedPomodoroMinutes} minutos de ${subject}.`
  );

  resetPomodoro();
}

// ======================================================
// PERFIL
// ======================================================

function renderProfilePage() {
  const settings =
    getSettings();

  const studyTime =
    getStorage(
      STORAGE_KEYS.studyTime,
      0
    );

  return `
    <section class="page profile-page">
      ${renderHeader(
        "Perfil",
        "CONFIGURACIÓN"
      )}

      <section class="profile-card">
        <div class="profile-avatar">
          ${escapeHTML(
            settings.name
              .charAt(0)
              .toUpperCase()
          )}
        </div>

        <div>
          <h2>
            ${escapeHTML(
              settings.name
            )}
          </h2>

          <p>
            ${escapeHTML(
              settings.course
            )}
          </p>
        </div>
      </section>

      <section class="profile-statistics">
        <article>
          <strong>
            ${studyTime}
          </strong>

          <span>
            Minutos estudiados
          </span>
        </article>
      </section>

      <form
        id="profile-form"
        class="settings-form"
      >
        <div class="form-group">
          <label for="profile-name">
            Nombre
          </label>

          <input
            id="profile-name"
            type="text"
            value="${escapeHTML(
              settings.name
            )}"
          />
        </div>

        <div class="form-group">
          <label for="profile-course">
            Curso
          </label>

          <input
            id="profile-course"
            type="text"
            value="${escapeHTML(
              settings.course
            )}"
          />
        </div>

        <button
          type="submit"
          class="primary-button full-width"
        >
          Guardar cambios
        </button>
      </form>
    </section>
  `;
}

// ======================================================
// NAVEGACIÓN
// ======================================================

function renderBottomNavigation() {
  return `
    <nav class="bottom-navigation">
      ${renderNavButton(
        "home",
        "home",
        "Hoy"
      )}

      ${renderNavButton(
        "calendar",
        "calendar_month",
        "Calendario"
      )}

      ${renderNavButton(
        "tasks",
        "checklist",
        "Tareas"
      )}

      ${renderNavButton(
        "study",
        "timer",
        "Estudiar"
      )}

      ${renderNavButton(
        "profile",
        "person",
        "Perfil"
      )}
    </nav>
  `;
}

function renderNavButton(
  page,
  icon,
  label
) {
  return `
    <button
      type="button"
      class="nav-button"
      data-page="${page}"
    >
      <span class="material-symbols-rounded">
        ${icon}
      </span>

      <span>${label}</span>
    </button>
  `;
}

function attachNavigationEvents() {
  document
    .querySelectorAll(
      ".nav-button"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          currentPage =
            button.dataset.page;

          renderCurrentPage();

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      );
    });
}

function updateNavigationState() {
  document
    .querySelectorAll(
      ".nav-button"
    )
    .forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.page ===
          currentPage
      );
    });
}

// ======================================================
// EVENTOS
// ======================================================

function attachHeaderEvents() {
  document
    .getElementById(
      "notification-button"
    )
    ?.addEventListener(
      "click",
      requestNotifications
    );

  document
    .querySelectorAll(
      "[data-go-page]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          currentPage =
            button.dataset.goPage;

          renderCurrentPage();
        }
      );
    });
}

function attachHomeEvents() {
  attachHeaderEvents();

  document
    .querySelector(
      '[data-action="start-pomodoro"]'
    )
    ?.addEventListener(
      "click",
      () => {
        currentPage = "study";
        renderCurrentPage();
      }
    );

  document
    .querySelector(
      '[data-action="what-now"]'
    )
    ?.addEventListener(
      "click",
      () => {
        showToast(
          "Te recomiendo estudiar Física durante 25 minutos."
        );
      }
    );

  document
    .querySelector(
      '[data-action="show-preu"]'
    )
    ?.addEventListener(
      "click",
      () => {
        document
          .getElementById(
            "preuniversity-section"
          )
          ?.scrollIntoView({
            behavior: "smooth"
          });
      }
    );

  document
    .querySelectorAll(
      "[data-add-classroom]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          saveClassroomLink(
            button.dataset
              .addClassroom
          );
        }
      );
    });

  document
    .querySelectorAll(
      "[data-study-subject]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          currentPage = "study";
          renderCurrentPage();

          const select =
            document.getElementById(
              "pomodoro-subject"
            );

          if (select) {
            select.value =
              button.dataset
                .studySubject;
          }
        }
      );
    });
}

function attachTaskEvents() {
  attachHeaderEvents();

  document
    .querySelectorAll(
      "[data-task-complete]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          toggleTask(
            button.dataset
              .taskComplete
          );
        }
      );
    });

  document
    .querySelectorAll(
      "[data-task-delete]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          deleteTask(
            button.dataset
              .taskDelete
          );
        }
      );
    });
}

function attachStudyEvents() {
  attachHeaderEvents();

  document
    .querySelectorAll(
      ".pomodoro-mode"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          selectedPomodoroMinutes =
            Number(
              button.dataset.minutes
            );

          pomodoroSeconds =
            selectedPomodoroMinutes *
            60;

          resetPomodoro();
          renderCurrentPage();
        }
      );
    });

  document
    .getElementById(
      "pomodoro-start"
    )
    ?.addEventListener(
      "click",
      startPomodoro
    );

  document
    .getElementById(
      "pomodoro-reset"
    )
    ?.addEventListener(
      "click",
      resetPomodoro
    );

  document
    .querySelectorAll(
      "[data-study-subject]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          const select =
            document.getElementById(
              "pomodoro-subject"
            );

          if (select) {
            select.value =
              button.dataset
                .studySubject;
          }
        }
      );
    });
}

function attachProfileEvents() {
  attachHeaderEvents();

  document
    .getElementById(
      "profile-form"
    )
    ?.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();

        const settings = {
          ...getSettings(),

          name:
            document
              .getElementById(
                "profile-name"
              )
              ?.value.trim() ||
            "Estudiante",

          course:
            document
              .getElementById(
                "profile-course"
              )
              ?.value.trim() ||
            ""
        };

        setStorage(
          STORAGE_KEYS.settings,
          settings
        );

        showToast(
          "Perfil guardado."
        );

        renderCurrentPage();
      }
    );
}

// ======================================================
// CLASSROOM
// ======================================================

function saveClassroomLink(subject) {
  const link =
    window.prompt(
      `Pega el enlace de Classroom de ${subject}:`
    );

  if (!link) {
    return;
  }

  if (
    !link.startsWith("http://") &&
    !link.startsWith("https://")
  ) {
    showToast(
      "El enlace debe comenzar con http:// o https://"
    );

    return;
  }

  const links =
    getClassroomLinks();

  links[subject] = link;

  setStorage(
    STORAGE_KEYS.classroomLinks,
    links
  );

  showToast(
    "Enlace guardado."
  );

  renderCurrentPage();
}

// ======================================================
// NOTIFICACIONES
// ======================================================

async function requestNotifications() {
  if (
    !("Notification" in window)
  ) {
    showToast(
      "Este navegador no permite notificaciones."
    );

    return;
  }

  const permission =
    await Notification.requestPermission();

  if (
    permission === "granted"
  ) {
    new Notification(
      "Black Hold",
      {
        body:
          "Las notificaciones están activadas."
      }
    );

    showToast(
      "Notificaciones activadas."
    );
  }
}

// ======================================================
// OTROS COMPONENTES
// ======================================================

function renderEmptyCard(
  icon,
  title,
  message
) {
  return `
    <article class="empty-card">
      <span class="material-symbols-rounded">
        ${icon}
      </span>

      <div>
        <h3>
          ${escapeHTML(title)}
        </h3>

        <p>
          ${escapeHTML(message)}
        </p>
      </div>
    </article>
  `;
}

function showToast(message) {
  const container =
    document.getElementById(
      "toast-container"
    );

  if (!container) {
    return;
  }

  const toast =
    document.createElement("div");

  toast.className = "app-toast";
  toast.textContent = message;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add(
      "visible"
    );
  });

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ======================================================
// SERVICE WORKER
// ======================================================

function registerServiceWorker() {
  if (
    "serviceWorker" in navigator
  ) {
    window.addEventListener(
      "load",
      () => {
        navigator.serviceWorker
          .register(
            "./service-worker.js"
          )
          .catch(console.error);
      }
    );
  }
}

// ======================================================
// INICIAR BLACK HOLD
// ======================================================

document.addEventListener(
  "DOMContentLoaded",
  initializeApp
);

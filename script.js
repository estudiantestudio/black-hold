// ======================================================
// BLACK HOLD
// Aplicación estudiantil
// Archivo: script.js
// ======================================================

// ======================================================
// CLAVES DE ALMACENAMIENTO
// ======================================================

const STORAGE_KEYS = {
  tasks: "blackHoldTasks",
  subjects: "blackHoldSubjects",
  settings: "blackHoldSettings",
  studyTime: "blackHoldStudyTime",
  classroomLinks: "blackHoldClassroomLinks"
};

// ======================================================
// CONFIGURACIÓN INICIAL
// ======================================================

const defaultSettings = {
  name: "Nahiara",
  course: "Estudiante",
  school: "",
  notifications: true,
  morningSummary: true
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
  "Descansar también forma parte de estudiar correctamente.",
  "No esperes sentirte preparada para comenzar. Comienza y prepárate en el proceso.",
  "Tu progreso se construye con decisiones pequeñas y constantes."
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

const defaultSubjects = [
  {
    id: 1,
    name: "Matemáticas",
    confidence: 65,
    level: "Estoy practicando",
    color: "blue"
  },
  {
    id: 2,
    name: "Física",
    confidence: 45,
    level: "Necesito reforzarlo",
    color: "red"
  },
  {
    id: 3,
    name: "Lenguaje",
    confidence: 70,
    level: "Estoy practicando",
    color: "blue"
  },
  {
    id: 4,
    name: "Inglés",
    confidence: 75,
    level: "Lo manejo bien",
    color: "green"
  },
  {
    id: 5,
    name: "Economía",
    confidence: 55,
    level: "Todavía me cuesta",
    color: "orange"
  }
];

// ======================================================
// VARIABLES DE LA APLICACIÓN
// ======================================================

let currentPage = "home";

let pomodoroInterval = null;
let pomodoroSeconds = 25 * 60;
let pomodoroRunning = false;
let selectedPomodoroMinutes = 25;

// ======================================================
// LOCAL STORAGE
// ======================================================

function getStorage(key, fallback) {
  try {
    const savedValue = localStorage.getItem(key);

    if (!savedValue) {
      return fallback;
    }

    return JSON.parse(savedValue);
  } catch (error) {
    console.error("No se pudieron leer los datos:", error);
    return fallback;
  }
}

function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("No se pudieron guardar los datos:", error);
  }
}

function getTasks() {
  return getStorage(STORAGE_KEYS.tasks, []);
}

function saveTasks(tasks) {
  setStorage(STORAGE_KEYS.tasks, tasks);
}

function getSubjects() {
  return getStorage(
    STORAGE_KEYS.subjects,
    defaultSubjects
  );
}

function getSettings() {
  return getStorage(
    STORAGE_KEYS.settings,
    defaultSettings
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

function formatCurrentDate(date = new Date()) {
  return new Intl.DateTimeFormat("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
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

function getMinutesDifference(startTime) {
  return (
    timeToMinutes(startTime) -
    getCurrentMinutes()
  );
}

function formatRemainingTime(minutes) {
  if (minutes <= 0) {
    return "Comenzando ahora";
  }

  if (minutes < 60) {
    return `Faltan ${minutes} minutos`;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (remainingMinutes === 0) {
    return `Faltan ${hours} h`;
  }

  return `Faltan ${hours} h ${remainingMinutes} min`;
}

function getDaySchedule() {
  const day = new Date().getDay();

  return schoolSchedule[day] || [];
}

function getTodayPreUniversity() {
  const today = new Date();
  const day = today.getDay();

  const schedule =
    preUniversitySchedule[day] || [];

  const scienceStartDate =
    new Date("2026-08-03T00:00:00");

  return schedule.filter((classItem) => {
    if (!classItem.science) {
      return true;
    }

    return today >= scienceStartDate;
  });
}

function getNextActivity() {
  const classroomLinks =
    getClassroomLinks();

  const schoolActivities =
    getDaySchedule().map((item) => ({
      ...item,
      type: "Colegio",
      classroom:
        classroomLinks[item.name] || ""
    }));

  const preUniversityActivities =
    getTodayPreUniversity().map((item) => ({
      ...item,
      type: "Preuniversitario",
      icon: "school",
      classroom:
        classroomLinks[item.name] || ""
    }));

  const activities = [
    ...schoolActivities,
    ...preUniversityActivities
  ];

  activities.sort((first, second) => {
    return (
      timeToMinutes(first.start) -
      timeToMinutes(second.start)
    );
  });

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
// INICIO DE LA APLICACIÓN
// ======================================================

function initializeApp() {
  const root =
    document.getElementById("app");

  if (!root) {
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
  const root =
    document.getElementById("app");

  root.innerHTML = `
    <div class="app-shell">
      <main
        id="page-content"
        class="page-content"
      ></main>

      ${renderBottomNavigation()}

      <button
        type="button"
        class="floating-add-button"
        id="floating-add-button"
        aria-label="Agregar tarea"
      >
        <span class="material-symbols-rounded">
          add
        </span>
      </button>
    </div>

    <div id="modal-container"></div>
    <div id="toast-container"></div>
  `;

  renderCurrentPage();
  attachGlobalEvents();
}

function renderCurrentPage() {
  const pageContent =
    document.getElementById("page-content");

  if (!pageContent) {
    return;
  }

  switch (currentPage) {
    case "calendar":
      pageContent.innerHTML =
        renderCalendarPage();

      attachCalendarEvents();
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

function renderHeader(
  title = "Black Hold",
  subtitle = ""
) {
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
        aria-label="Activar notificaciones"
      >
        <span class="material-symbols-rounded">
          notifications
        </span>
      </button>
    </header>
  `;
}

// ======================================================
// PÁGINA DE INICIO
// ======================================================

function renderHomePage() {
  const settings = getSettings();
  const tasks = getTasks();
  const nextActivity =
    getNextActivity();
  const todayClasses =
    getDaySchedule();

  const pendingTasks =
    tasks.filter((task) => {
      return !task.completed;
    });

  const messageIndex =
    new Date().getDate() %
    motivationalMessages.length;

  const motivation =
    motivationalMessages[messageIndex];

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
          ${capitalize(formatCurrentDate())}
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
              style="
                width:
                ${calculateDailyProgress()}%;
              "
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
                "Puedes descansar o adelantar una tarea."
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
            ¿Qué hago ahora?
          </strong>

          <small>
            Obtener recomendación
          </small>
        </button>

        <button
          type="button"
          class="quick-action-card"
          data-action="new-task"
        >
          <span class="material-symbols-rounded">
            add_task
          </span>

          <strong>Nueva tarea</strong>
          <small>Registrar rápidamente</small>
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

          <button
            type="button"
            class="text-button"
            data-go-page="calendar"
          >
            Ver calendario
          </button>
        </div>

        <div class="timeline-list">
          ${
            todayClasses.length > 0
              ? todayClasses
                  .map((classItem) => {
                    return renderScheduleItem(
                      classItem
                    );
                  })
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
            ${escapeHTML(motivation)}
          </h3>
        </div>
      </section>

      ${renderPendingTasksPreview()}
    </section>
  `;
}

function renderNextActivityCard(activity) {
  const remaining =
    getMinutesDifference(
      activity.start
    );

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

          ${formatRemainingTime(remaining)}
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
                data-action="add-classroom"
                data-subject="${escapeHTML(
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
          data-action="study-subject"
          data-subject="${escapeHTML(
            activity.name
          )}"
        >
          Repasar
        </button>
      </div>
    </article>
  `;
}

function renderScheduleItem(classItem) {
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
            ${classItem.icon || "school"}
          </span>
        </div>

        <div>
          <h3>
            ${escapeHTML(classItem.name)}
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

  const today = new Date();

  const scienceStartDate =
    new Date("2026-08-03T00:00:00");

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

      ${
        today < scienceStartDate
          ? `
            <div class="warning-card">
              <span class="material-symbols-rounded">
                info
              </span>

              <div>
                <strong>
                  Cambio temporal de horario
                </strong>

                <p>
                  Las clases de Ciencias
                  comienzan la semana del
                  3 de agosto.
                </p>
              </div>
            </div>
          `
          : ""
      }

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

                      <button
                        type="button"
                        class="icon-action-button"
                        data-action="prepare-preu"
                        data-subject="${escapeHTML(
                          classItem.name
                        )}"
                      >
                        <span class="material-symbols-rounded">
                          arrow_forward
                        </span>
                      </button>
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

function renderPendingTasksPreview() {
  const tasks = getTasks()
    .filter((task) => {
      return !task.completed;
    })
    .sort((first, second) => {
      return (
        new Date(first.date) -
        new Date(second.date)
      );
    })
    .slice(0, 3);

  return `
    <section class="section-block">
      <div class="section-title-row">
        <div>
          <p class="section-label">
            PENDIENTES
          </p>

          <h2>Próximas tareas</h2>
        </div>

        <button
          type="button"
          class="text-button"
          data-go-page="tasks"
        >
          Ver todas
        </button>
      </div>

      <div class="task-preview-list">
        ${
          tasks.length > 0
            ? tasks
                .map((task) => {
                  return renderTaskCard(
                    task,
                    true
                  );
                })
                .join("")
            : renderEmptyCard(
                "task_alt",
                "Todo al día",
                "No tienes tareas pendientes registradas."
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

  return Math.min(
    100,
    Math.round(
      (completed / schedule.length) *
        100
    )
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

      <div class="calendar-tabs">
        <button
          type="button"
          class="calendar-tab active"
          data-calendar-view="week"
        >
          Semana
        </button>

        <button
          type="button"
          class="calendar-tab"
          data-calendar-view="day"
        >
          Día
        </button>
      </div>

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

                  ${
                    preUniversitySchedule[
                      day.number
                    ]
                      ?.map((item) => {
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
                      .join("") || ""
                  }
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
// TAREAS
// ======================================================

function renderTasksPage() {
  const tasks = getTasks().sort(
    (first, second) => {
      if (
        first.completed !==
        second.completed
      ) {
        return (
          Number(first.completed) -
          Number(second.completed)
        );
      }

      return (
        new Date(first.date) -
        new Date(second.date)
      );
    }
  );

  const pending =
    tasks.filter((task) => {
      return !task.completed;
    }).length;

  const completed =
    tasks.filter((task) => {
      return task.completed;
    }).length;

  return `
    <section class="page tasks-page">
      ${renderHeader(
        "Tareas",
        "ORGANIZA TU TRABAJO"
      )}

      <div class="task-statistics">
        <article>
          <strong>${pending}</strong>
          <span>Pendientes</span>
        </article>

        <article>
          <strong>${completed}</strong>
          <span>Terminadas</span>
        </article>

        <article>
          <strong>${tasks.length}</strong>
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

        <button
          type="button"
          class="primary-small-button"
          id="new-task-button"
        >
          <span class="material-symbols-rounded">
            add
          </span>

          Nueva
        </button>
      </div>

      <div class="task-list">
        ${
          tasks.length > 0
            ? tasks
                .map((task) => {
                  return renderTaskCard(
                    task
                  );
                })
                .join("")
            : renderEmptyCard(
                "assignment",
                "No hay tareas registradas",
                "Presiona Nueva para agregar tu primera tarea."
              )
        }
      </div>
    </section>
  `;
}

function renderTaskCard(
  task,
  compact = false
) {
  const daysRemaining =
    calculateDaysRemaining(task.date);

  const safeLink =
    isValidHttpUrl(task.link)
      ? escapeHTML(task.link)
      : "";

  return `
    <article
      class="
        task-card
        ${task.completed ? "completed" : ""}
        ${compact ? "compact" : ""}
      "
    >
      <button
        type="button"
        class="task-check-button"
        data-task-complete="${task.id}"
        aria-label="Cambiar estado"
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
        <div class="task-card-heading">
          <span class="subject-chip">
            ${escapeHTML(task.subject)}
          </span>

          <span
            class="
              priority-chip
              priority-${escapeHTML(
                task.priority
              )}
            "
          >
            ${capitalize(task.priority)}
          </span>
        </div>

        <h3>
          ${escapeHTML(task.title)}
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

        <div class="task-meta">
          <span>
            <span class="material-symbols-rounded">
              calendar_today
            </span>

            ${formatTaskDate(task.date)}
          </span>

          <span>
            ${
              daysRemaining < 0
                ? "Atrasada"
                : daysRemaining === 0
                ? "Vence hoy"
                : `Faltan ${daysRemaining} días`
            }
          </span>
        </div>

        ${
          safeLink
            ? `
              <a
                href="${safeLink}"
                target="_blank"
                rel="noopener noreferrer"
                class="task-link-button"
              >
                <span class="material-symbols-rounded">
                  link
                </span>

                Abrir material
              </a>
            `
            : ""
        }
      </div>

      ${
        compact
          ? ""
          : `
            <button
              type="button"
              class="task-delete-button"
              data-task-delete="${task.id}"
              aria-label="Eliminar tarea"
            >
              <span class="material-symbols-rounded">
                delete
              </span>
            </button>
          `
      }
    </article>
  `;
}

function calculateDaysRemaining(
  dateString
) {
  if (!dateString) {
    return 0;
  }

  const today = new Date();

  const targetDate =
    new Date(
      `${dateString}T12:00:00`
    );

  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  return Math.ceil(
    (
      targetDate.getTime() -
      today.getTime()
    ) / 86400000
  );
}

function formatTaskDate(dateString) {
  if (!dateString) {
    return "Sin fecha";
  }

  const date =
    new Date(
      `${dateString}T12:00:00`
    );

  return new Intl.DateTimeFormat(
    "es-CL",
    {
      day: "numeric",
      month: "short"
    }
  ).format(date);
}

// ======================================================
// PÁGINA DE ESTUDIO
// ======================================================

function renderStudyPage() {
  const subjects =
    getSubjects();

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
          Elige una materia y comienza.
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
            <span class="material-symbols-rounded">
              play_arrow
            </span>

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
        <div class="section-title-row">
          <div>
            <p class="section-label">
              REFUERZO
            </p>

            <h2>Mis materias</h2>
          </div>
        </div>

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
                      class="
                        progress-fill
                        subject-${subject.color}
                      "
                      style="
                        width:
                        ${subject.confidence}%;
                      "
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

function formatTimer(totalSeconds) {
  const minutes =
    Math.floor(
      totalSeconds / 60
    );

  const seconds =
    totalSeconds % 60;

  return `
    ${String(minutes).padStart(2, "0")}:
    ${String(seconds).padStart(2, "0")}
  `.replace(/\s/g, "");
}

function startPomodoro() {
  const subjectSelect =
    document.getElementById(
      "pomodoro-subject"
    );

  const selectedSubject =
    subjectSelect?.value;

  if (!selectedSubject) {
    showToast(
      "Selecciona una materia antes de comenzar."
    );

    return;
  }

  if (pomodoroRunning) {
    pausePomodoro();
    return;
  }

  pomodoroRunning = true;

  const startButton =
    document.getElementById(
      "pomodoro-start"
    );

  const status =
    document.getElementById(
      "pomodoro-status"
    );

  if (startButton) {
    startButton.innerHTML = `
      <span class="material-symbols-rounded">
        pause
      </span>

      Pausar
    `;
  }

  if (status) {
    status.textContent =
      `Estudiando ${selectedSubject}`;
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
        completePomodoro(
          selectedSubject
        );
      }
    }, 1000);
}

function pausePomodoro() {
  pomodoroRunning = false;

  clearInterval(
    pomodoroInterval
  );

  const startButton =
    document.getElementById(
      "pomodoro-start"
    );

  const status =
    document.getElementById(
      "pomodoro-status"
    );

  if (startButton) {
    startButton.innerHTML = `
      <span class="material-symbols-rounded">
        play_arrow
      </span>

      Continuar
    `;
  }

  if (status) {
    status.textContent =
      "Sesión pausada";
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

  const status =
    document.getElementById(
      "pomodoro-status"
    );

  const startButton =
    document.getElementById(
      "pomodoro-start"
    );

  if (clock) {
    clock.textContent =
      formatTimer(
        pomodoroSeconds
      );
  }

  if (status) {
    status.textContent =
      "Elige una materia y comienza.";
  }

  if (startButton) {
    startButton.innerHTML = `
      <span class="material-symbols-rounded">
        play_arrow
      </span>

      Comenzar
    `;
  }
}

function completePomodoro(subject) {
  clearInterval(
    pomodoroInterval
  );

  pomodoroRunning = false;

  const totalStudyTime =
    getStorage(
      STORAGE_KEYS.studyTime,
      0
    );

  setStorage(
    STORAGE_KEYS.studyTime,
    totalStudyTime +
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

  const totalStudyTime =
    getStorage(
      STORAGE_KEYS.studyTime,
      0
    );

  const tasks =
    getTasks();

  const completedTasks =
    tasks.filter((task) => {
      return task.completed;
    }).length;

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
            ${escapeHTML(settings.name)}
          </h2>

          <p>
            ${escapeHTML(settings.course)}
          </p>
        </div>
      </section>

      <section class="profile-statistics">
        <article>
          <strong>
            ${totalStudyTime}
          </strong>

          <span>
            Minutos estudiados
          </span>
        </article>

        <article>
          <strong>
            ${completedTasks}
          </strong>

          <span>
            Tareas terminadas
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
            required
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

        <div class="form-group">
          <label for="profile-school">
            Colegio
          </label>

          <input
            id="profile-school"
            type="text"
            value="${escapeHTML(
              settings.school
            )}"
          />
        </div>

        <label class="setting-switch">
          <div>
            <strong>
              Notificaciones
            </strong>

            <span>
              Recordatorios de clases y tareas
            </span>
          </div>

          <input
            id="profile-notifications"
            type="checkbox"
            ${
              settings.notifications
                ? "checked"
                : ""
            }
          />

          <span class="switch-slider"></span>
        </label>

        <button
          type="submit"
          class="primary-button full-width"
        >
          Guardar cambios
        </button>
      </form>

      <button
        type="button"
        class="danger-button"
        id="clear-data-button"
      >
        Borrar todos los datos
      </button>
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

      <span>
        ${label}
      </span>
    </button>
  `;
}

function updateNavigationState() {
  document
    .querySelectorAll(".nav-button")
    .forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.page ===
          currentPage
      );
    });

  const floatingButton =
    document.getElementById(
      "floating-add-button"
    );

  if (floatingButton) {
    floatingButton.style.display =
      currentPage === "tasks" ||
      currentPage === "home"
        ? "flex"
        : "none";
  }
}

// ======================================================
// MODAL PARA AGREGAR TAREA
// CORREGIDO: LA X AHORA CIERRA CORRECTAMENTE
// ======================================================

function openTaskModal() {
  const modalContainer =
    document.getElementById(
      "modal-container"
    );

  if (!modalContainer) {
    console.error(
      "No se encontró modal-container."
    );

    return;
  }

  modalContainer.innerHTML = `
    <div
      class="modal-overlay"
      id="task-modal-overlay"
    >
      <section
        class="app-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="task-modal-title"
      >
        <div class="modal-header">
          <div>
            <p class="section-label">
              NUEVO PENDIENTE
            </p>

            <h2 id="task-modal-title">
              Agregar tarea
            </h2>
          </div>

          <button
            type="button"
            class="modal-close-button"
            id="close-task-modal"
            aria-label="Cerrar ventana"
          >
            <span class="material-symbols-rounded">
              close
            </span>
          </button>
        </div>

        <form id="task-form">
          <div class="form-group">
            <label for="task-title">
              Nombre de la tarea
            </label>

            <input
              id="task-title"
              type="text"
              placeholder="Ejemplo: Guía de Física"
              autocomplete="off"
              required
            />
          </div>

          <div class="form-group">
            <label for="task-subject">
              Asignatura
            </label>

            <select
              id="task-subject"
              required
            >
              <option value="">
                Seleccionar asignatura
              </option>

              <option value="Matemáticas">
                Matemáticas
              </option>

              <option value="Física">
                Física
              </option>

              <option value="Lenguaje">
                Lenguaje
              </option>

              <option value="Inglés">
                Inglés
              </option>

              <option value="Economía">
                Economía
              </option>

              <option value="Teatro">
                Teatro
              </option>

              <option value="Educación Ciudadana">
                Educación Ciudadana
              </option>

              <option value="Teoría del Conocimiento">
                Teoría del Conocimiento
              </option>

              <option value="Química">
                Química
              </option>

              <option value="Historia">
                Historia
              </option>

              <option value="Comprensión Lectora">
                Comprensión Lectora
              </option>

              <option value="Matemática M1">
                Matemática M1
              </option>

              <option value="Otra">
                Otra
              </option>
            </select>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="task-date">
                Fecha de entrega
              </label>

              <input
                id="task-date"
                type="date"
                required
              />
            </div>

            <div class="form-group">
              <label for="task-priority">
                Prioridad
              </label>

              <select id="task-priority">
                <option value="media">
                  Media
                </option>

                <option value="urgente">
                  Urgente
                </option>

                <option value="alta">
                  Alta
                </option>

                <option value="baja">
                  Baja
                </option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="task-description">
              Descripción
            </label>

            <textarea
              id="task-description"
              rows="4"
              placeholder="Agrega instrucciones o detalles"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="task-link">
              Enlace
            </label>

            <input
              id="task-link"
              type="url"
              placeholder="Classroom, guía o material"
            />
          </div>

          <button
            type="submit"
            class="primary-button full-width"
          >
            Guardar tarea
          </button>
        </form>
      </section>
    </div>
  `;

  document.body.classList.add(
    "modal-open"
  );

  const closeButton =
    document.getElementById(
      "close-task-modal"
    );

  const overlay =
    document.getElementById(
      "task-modal-overlay"
    );

  const modal =
    overlay?.querySelector(
      ".app-modal"
    );

  const taskForm =
    document.getElementById(
      "task-form"
    );

  const titleInput =
    document.getElementById(
      "task-title"
    );

  // Cerrar usando la cruz.
  closeButton?.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      closeTaskModal();
    }
  );

  // Cerrar haciendo clic en el fondo.
  overlay?.addEventListener(
    "click",
    (event) => {
      if (event.target === overlay) {
        closeTaskModal();
      }
    }
  );

  // Evita cerrar al hacer clic dentro.
  modal?.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
    }
  );

  taskForm?.addEventListener(
    "submit",
    createTask
  );

  setTimeout(() => {
    titleInput?.focus();
  }, 100);
}

function closeTaskModal() {
  const modalContainer =
    document.getElementById(
      "modal-container"
    );

  if (modalContainer) {
    modalContainer.innerHTML = "";
  }

  document.body.classList.remove(
    "modal-open"
  );
}

function closeTaskModalWithEscape(
  event
) {
  if (event.key !== "Escape") {
    return;
  }

  const modal =
    document.getElementById(
      "task-modal-overlay"
    );

  if (modal) {
    closeTaskModal();
  }
}

function createTask(event) {
  event.preventDefault();

  const titleInput =
    document.getElementById(
      "task-title"
    );

  const subjectInput =
    document.getElementById(
      "task-subject"
    );

  const descriptionInput =
    document.getElementById(
      "task-description"
    );

  const dateInput =
    document.getElementById(
      "task-date"
    );

  const priorityInput =
    document.getElementById(
      "task-priority"
    );

  const linkInput =
    document.getElementById(
      "task-link"
    );

  const title =
    titleInput?.value.trim() || "";

  const subject =
    subjectInput?.value || "";

  const description =
    descriptionInput?.value.trim() ||
    "";

  const date =
    dateInput?.value || "";

  const priority =
    priorityInput?.value || "media";

  const link =
    linkInput?.value.trim() || "";

  if (!title) {
    showToast(
      "Escribe el nombre de la tarea."
    );

    titleInput?.focus();
    return;
  }

  if (!subject) {
    showToast(
      "Selecciona una asignatura."
    );

    subjectInput?.focus();
    return;
  }

  if (!date) {
    showToast(
      "Selecciona una fecha de entrega."
    );

    dateInput?.focus();
    return;
  }

  if (
    link &&
    !isValidHttpUrl(link)
  ) {
    showToast(
      "El enlace debe comenzar con http:// o https://"
    );

    linkInput?.focus();
    return;
  }

  const tasks = getTasks();

  tasks.push({
    id: Date.now(),
    title,
    subject,
    description,
    date,
    priority,
    link,
    completed: false,
    createdAt:
      new Date().toISOString()
  });

  saveTasks(tasks);

  closeTaskModal();

  showToast(
    "Tarea guardada correctamente."
  );

  renderCurrentPage();
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

  saveTasks(tasks);
  renderCurrentPage();
}

function deleteTask(taskId) {
  const confirmed =
    window.confirm(
      "¿Seguro que quieres eliminar esta tarea?"
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

  saveTasks(tasks);

  showToast(
    "Tarea eliminada."
  );

  renderCurrentPage();
}

// ======================================================
// RECOMENDACIÓN
// ======================================================

function recommendTask() {
  const priorityOrder = {
    urgente: 1,
    alta: 2,
    media: 3,
    baja: 4
  };

  const pendingTasks =
    getTasks()
      .filter((task) => {
        return !task.completed;
      })
      .sort((first, second) => {
        const priorityDifference =
          priorityOrder[
            first.priority
          ] -
          priorityOrder[
            second.priority
          ];

        if (
          priorityDifference !== 0
        ) {
          return priorityDifference;
        }

        return (
          new Date(first.date) -
          new Date(second.date)
        );
      });

  if (
    pendingTasks.length === 0
  ) {
    showRecommendationModal(
      "No tienes tareas pendientes",
      "Puedes hacer un repaso de Física o Matemáticas durante 20 minutos."
    );

    return;
  }

  const task =
    pendingTasks[0];

  const daysRemaining =
    calculateDaysRemaining(
      task.date
    );

  const urgencyMessage =
    daysRemaining <= 1
      ? "Esta tarea tiene una fecha de entrega muy cercana."
      : `Faltan ${daysRemaining} días para la entrega.`;

  showRecommendationModal(
    `Trabaja en ${task.title}`,
    `Dedica 25 minutos a ${task.subject}. ${urgencyMessage}`
  );
}

function showRecommendationModal(
  title,
  message
) {
  const modalContainer =
    document.getElementById(
      "modal-container"
    );

  if (!modalContainer) {
    return;
  }

  modalContainer.innerHTML = `
    <div
      class="modal-overlay"
      id="recommendation-overlay"
    >
      <section
        class="
          app-modal
          recommendation-modal
        "
      >
        <div class="recommendation-icon">
          <span class="material-symbols-rounded">
            auto_awesome
          </span>
        </div>

        <p class="section-label">
          RECOMENDACIÓN
        </p>

        <h2>
          ${escapeHTML(title)}
        </h2>

        <p>
          ${escapeHTML(message)}
        </p>

        <button
          type="button"
          class="primary-button full-width"
          id="accept-recommendation"
        >
          Comenzar ahora
        </button>

        <button
          type="button"
          class="secondary-button full-width"
          id="close-recommendation"
        >
          Cerrar
        </button>
      </section>
    </div>
  `;

  document.body.classList.add(
    "modal-open"
  );

  const overlay =
    document.getElementById(
      "recommendation-overlay"
    );

  const closeButton =
    document.getElementById(
      "close-recommendation"
    );

  const acceptButton =
    document.getElementById(
      "accept-recommendation"
    );

  overlay?.addEventListener(
    "click",
    (event) => {
      if (event.target === overlay) {
        closeTaskModal();
      }
    }
  );

  closeButton?.addEventListener(
    "click",
    closeTaskModal
  );

  acceptButton?.addEventListener(
    "click",
    () => {
      closeTaskModal();

      currentPage = "study";

      selectedPomodoroMinutes = 25;
      pomodoroSeconds = 25 * 60;

      renderCurrentPage();
    }
  );
}

// ======================================================
// EVENTOS GENERALES
// ======================================================

function attachGlobalEvents() {
  document
    .querySelectorAll(".nav-button")
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

  document
    .getElementById(
      "floating-add-button"
    )
    ?.addEventListener(
      "click",
      openTaskModal
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

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      );
    });
}

function attachHeaderEvents() {
  document
    .getElementById(
      "notification-button"
    )
    ?.addEventListener(
      "click",
      requestNotifications
    );
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
      recommendTask
    );

  document
    .querySelector(
      '[data-action="new-task"]'
    )
    ?.addEventListener(
      "click",
      openTaskModal
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
      '[data-action="study-subject"]'
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          const subject =
            button.dataset.subject;

          currentPage = "study";

          renderCurrentPage();

          const select =
            document.getElementById(
              "pomodoro-subject"
            );

          if (select) {
            select.value = subject;
          }
        }
      );
    });

  document
    .querySelectorAll(
      '[data-action="prepare-preu"]'
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          showToast(
            `Prepárate para ${button.dataset.subject}: revisa tu guía y materiales.`
          );
        }
      );
    });

  document
    .querySelectorAll(
      '[data-action="add-classroom"]'
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          saveClassroomLink(
            button.dataset.subject
          );
        }
      );
    });
}

function attachCalendarEvents() {
  attachHeaderEvents();

  document
    .querySelectorAll(
      ".calendar-tab"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          document
            .querySelectorAll(
              ".calendar-tab"
            )
            .forEach((tab) => {
              tab.classList.remove(
                "active"
              );
            });

          button.classList.add(
            "active"
          );

          if (
            button.dataset
              .calendarView === "day"
          ) {
            showToast(
              "La vista diaria está disponible en la pantalla Hoy."
            );
          }
        }
      );
    });
}

function attachTaskEvents() {
  attachHeaderEvents();

  document
    .getElementById(
      "new-task-button"
    )
    ?.addEventListener(
      "click",
      openTaskModal
    );

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
          document
            .querySelectorAll(
              ".pomodoro-mode"
            )
            .forEach((item) => {
              item.classList.remove(
                "active"
              );
            });

          button.classList.add(
            "active"
          );

          selectedPomodoroMinutes =
            Number(
              button.dataset.minutes
            );

          pomodoroSeconds =
            selectedPomodoroMinutes *
            60;

          if (pomodoroRunning) {
            clearInterval(
              pomodoroInterval
            );

            pomodoroRunning = false;
          }

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

          document
            .querySelector(
              ".pomodoro-card"
            )
            ?.scrollIntoView({
              behavior: "smooth"
            });

          showToast(
            `${button.dataset.studySubject} seleccionada para estudiar.`
          );
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

        const name =
          document
            .getElementById(
              "profile-name"
            )
            ?.value.trim() ||
          "Estudiante";

        const course =
          document
            .getElementById(
              "profile-course"
            )
            ?.value.trim() || "";

        const school =
          document
            .getElementById(
              "profile-school"
            )
            ?.value.trim() || "";

        const notifications =
          document.getElementById(
            "profile-notifications"
          )?.checked || false;

        const settings = {
          ...getSettings(),
          name,
          course,
          school,
          notifications
        };

        setStorage(
          STORAGE_KEYS.settings,
          settings
        );

        showToast(
          "Perfil guardado correctamente."
        );

        renderCurrentPage();
      }
    );

  document
    .getElementById(
      "clear-data-button"
    )
    ?.addEventListener(
      "click",
      () => {
        const confirmed =
          window.confirm(
            "Se borrarán tus tareas, configuración y tiempo de estudio. ¿Continuar?"
          );

        if (!confirmed) {
          return;
        }

        Object.values(
          STORAGE_KEYS
        ).forEach((key) => {
          localStorage.removeItem(
            key
          );
        });

        showToast(
          "Todos los datos fueron borrados."
        );

        renderCurrentPage();
      }
    );
}

// ======================================================
// CLASSROOM
// ======================================================

function saveClassroomLink(subject) {
  const link = window.prompt(
    `Pega el enlace de Classroom de ${subject}:`
  );

  if (!link) {
    return;
  }

  if (!isValidHttpUrl(link)) {
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
    `Enlace de ${subject} guardado.`
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

  if (
    Notification.permission ===
    "granted"
  ) {
    sendTestNotification();
    return;
  }

  const permission =
    await Notification.requestPermission();

  if (
    permission === "granted"
  ) {
    sendTestNotification();
  } else {
    showToast(
      "No se activaron las notificaciones."
    );
  }
}

function sendTestNotification() {
  const nextActivity =
    getNextActivity();

  new Notification(
    "Black Hold",
    {
      body: nextActivity
        ? `${nextActivity.name} comienza a las ${nextActivity.start}.`
        : "No tienes más clases programadas para hoy.",
      icon: "./icon-192.png"
    }
  );

  showToast(
    "Notificaciones activadas."
  );
}

// ======================================================
// SERVICE WORKER
// ======================================================

function registerServiceWorker() {
  if (
    !("serviceWorker" in navigator)
  ) {
    return;
  }

  window.addEventListener(
    "load",
    () => {
      navigator.serviceWorker
        .register(
          "./service-worker.js"
        )
        .catch((error) => {
          console.error(
            "Error al registrar el Service Worker:",
            error
          );
        });
    }
  );
}

// ======================================================
// COMPONENTES AUXILIARES
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
    window.alert(message);
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
    toast.classList.remove(
      "visible"
    );

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

function isValidHttpUrl(value) {
  if (!value) {
    return false;
  }

  try {
    const url = new URL(value);

    return (
      url.protocol === "http:" ||
      url.protocol === "https:"
    );
  } catch {
    return false;
  }
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
// CERRAR MODAL CON ESCAPE
// ======================================================

document.addEventListener(
  "keydown",
  closeTaskModalWithEscape
);

// ======================================================
// INICIAR BLACK HOLD
// ======================================================

document.addEventListener(
  "DOMContentLoaded",
  initializeApp
);

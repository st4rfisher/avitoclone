# Avito Clone

React приложение, созданное с использованием Vite, TypeScript, React Router, и других современных технологий.

## Технологии

- **Node.js** v20+
- **React** 18.3.1
- **TypeScript** 5.5.4
- **Vite** 5.4.2 (сборщик)
- **React Router DOM** 6.26.0
- **Axios** 1.7.7
- **SCSS** для стилизации
- **ESLint** для линтинга
- **Prettier** для форматирования кода

## Установка

```bash
npm install
```

## Запуск проекта

### Локальная разработка

```bash
npm run dev
```

Проект будет доступен по адресу `http://localhost:3333` с автоматической поддержкой hot-reload.

### Docker

#### Сборка и запуск через Docker Compose

```bash
docker-compose up --build
```

Приложение будет доступно по адресу `http://localhost:8080`

#### Остановка контейнеров

```bash
docker-compose down
```

#### Запуск в фоновом режиме

```bash
docker-compose up -d
```

#### Просмотр логов

```bash
docker-compose logs -f frontend
```

#### Сборка образа вручную

```bash
docker build -t avito-clone-frontend .
```

#### Запуск контейнера вручную

```bash
docker run -p 8080:80 avito-clone-frontend
```

## Другие команды

- `npm run build` - сборка проекта для production
- `npm run preview` - предпросмотр production сборки
- `npm run lint` - проверка кода с помощью ESLint
- `npm run format` - форматирование кода с помощью Prettier

## Структура проекта

```
.
├── src/
│   ├── App.tsx          # Главный компонент приложения
│   ├── main.tsx         # Точка входа
│   └── styles/          # SCSS стили
│       ├── index.scss   # Глобальные стили
│       └── App.scss     # Стили компонента App
├── Dockerfile           # Docker образ для production
├── docker-compose.yml   # Docker Compose конфигурация
├── nginx.conf           # Конфигурация Nginx для production
└── .dockerignore        # Игнорируемые файлы при сборке Docker образа
```

## Docker

Проект включает полную поддержку Docker для production развертывания:

- **Multi-stage build** - оптимизированная сборка с минимальным размером образа
- **Nginx** - веб-сервер для раздачи статических файлов
- **Docker Compose** - оркестрация сервисов (готово для добавления backend и других сервисов)

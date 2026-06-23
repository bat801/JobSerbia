# JobSerbia — Доска вакансий в Сербии

Прототип сайта для поиска работы в Сербии, ориентированный на русскоязычных пользователей.

## 🛠 Как запустить проект

1. Зарегистрируйтесь на [Supabase](https://supabase.com/) и создайте новый проект.
2. Перейдите в раздел **SQL Editor** в Supabase и выполните скрипт создания таблицы (см. ниже).
3. Перейдите в раздел **Project Settings -> API**. Скопируйте `Project URL` и `anon public` ключ.
4. Откройте файл `app.js` в папке с вашим кодом и вставьте ваши URL и Key в константы `SUPABASE_URL` и `SUPABASE_KEY`.
5. Откройте `index.html` в браузере (или задеплойте папку на GitHub Pages).

## 🗄 SQL-скрипт (создание таблицы и тестовые данные)

Скопируйте этот код и выполните в SQL Editor вашего проекта Supabase:

```sql
-- 1. Создаем таблицу вакансий
CREATE TABLE vacancies (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    title text NOT NULL,
    company text NOT NULL,
    city text NOT NULL,
    salary_min integer,
    salary_max integer,
    contacts text NOT NULL,
    description text NOT NULL,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now()
);

-- 2. Отключаем RLS для простого доступа (как требуется в ТЗ)
ALTER TABLE vacancies DISABLE ROW LEVEL SECURITY;

-- 3. Вставляем тестовые данные
INSERT INTO vacancies (title, company, city, salary_min, salary_max, contacts, description)
VALUES 
('Frontend Developer (React)', 'Tech Balkan', 'Белград', 2000, 3500, '@hr_techbalkan', 'Ищем опытного Frontend разработчика. Требования: React, TypeScript, Tailwind. Офис в центре Белграда, гибридный график.'),
('Менеджер по продажам', 'Balkan Sales Group', 'Нови-Сад', 1000, 2000, 'balkan.sales@example.com', 'Открыта вакансия менеджера по продажам. Знание русского и английского/сербского обязательно. Оклад + % с продаж.'),
('Бариста', 'Coffee NS', 'Нови-Сад', 600, 800, '+381601234567', 'Ищем бариста в новую кофейню. Опыт работы приветствуется. График 2/2.'),
('Системный администратор', 'IT Solutions', 'Белград', 1500, 2500, 'Telegram: @sysadmin_hr', 'Поддержка офисной инфраструктуры, настройка сетей. Требуется понимание Linux и Windows Server.');
---

### 2. `styles.css` (Глобальные стили)

```css
/* Подключаем шрифт Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
    font-family: 'Inter', sans-serif;
    /* Цвет фона для всей страницы */
    background-color: #FFFFFF; 
    /* Основной цвет текста (#1E293B - slate-800) */
    color: #1E293B; 
    -webkit-font-smoothing: antialiased;
}

/* Кастомный скроллбар для эстетики (по желанию) */
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-track {
    background: #F8FAFC; 
}
::-webkit-scrollbar-thumb {
    background: #CBD5E1; 
    border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
    background: #94A3B8; 
}

/* Утилита для скрытия элементов */
.hidden {
    display: none !important;
}
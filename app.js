// --- НАСТРОЙКИ SUPABASE ---
// ВСТАВЬТЕ СЮДА ВАШИ ДАННЫЕ ИЗ SUPABASE PROJECT SETTINGS -> API
const SUPABASE_URL = 'https://toywwwrbpossjmfrdcqi.supabase.co';
const SUPABASE_KEY = 'sb_publishable_9ayyrVFz0iT7uLHpt3TH-w_qy6Lokqo';

// Инициализация клиента Supabase
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

// --- ОБЩИЕ УТИЛИТЫ ---

// Форматирование относительного времени
function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return "Только что";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} мин. назад`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} ч. назад`;
    if (diffInSeconds < 172800) return "Вчера";
    
    return `${Math.floor(diffInSeconds / 86400)} дн. назад`;
}

// Форматирование зарплаты
function formatSalary(min, max) {
    if (min && max) return `€${min} – ${max}`;
    if (min) return `от €${min}`;
    if (max) return `до €${max}`;
    return 'Зарплата не указана';
}

// Показать кастомный тост (уведомление)
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 transition-opacity duration-300';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
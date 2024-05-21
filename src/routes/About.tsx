import './About.scss'

const About = () => {
    return (
        <div id='container' className="h-screen bg-gray-400 dark:bg-gray-600 flex flex-col justify-start items-center">
            <div id='main' className="bg-gray-600 dark:bg-gray-800 shadow-2xl p-5 w-1/2 mx-auto rounded-md  text-center mt-10 mb-20">
                <div dir="rtl">
                    <h1 className="text-orange-300 text-3xl mt-5">ברוכים הבאים לפרויקט מסכם מודול של React בקורס ה- FullStack שלי במכללת HackerU.</h1>
                </div>
                <div dir="rtl">
                    <p className="text-white text-2xl mt-5">הפרויקט הוא פלטפורמה לניהול כרטיסי עסקים דיגיטליים. בעל עסק יכול ליצור ולעדכן כרטיס ביקור שיציג את פרטי העסק שלו. בפרויקט יש אפשרות לבעל עסק להירשם לאתר ואז להתחבר אליו בכדי ליצור כרטיס ביקור דיגיטלי ולבצע פעולות CRUD על הכרטיס שלו. למבקר באתר יש אפשרות לסמן כרטיסים כמועדפים ולראות אותם בדף ייעודי. לאתר יש מצב תצוגה חשוך למשתמש שמעוניין בכך. קיים באתר סרגל חיפוש בכדי למצוא את העסקים הרלוונטים. האתר רספונסיבי שמתאים גם למחשבים וגם לסמארטפונים.</p>
                </div>
                <div dir="rtl">
                    <p className="text-white text-2xl mt-5">הטכנולוגיות שבהם השתמשתי לפרויקט: React, Axios, React Router, Tailwind css, React Context, TypeScript, React Icons, Toastify, Regex, React-Hook-Form</p>
                </div>
            </div>
        </div>
    )
}

export default About
export const ROUTES = {
    login: "/",
    callback: "/callback",
    register: "/register",
    employee: "/employee",
    landing: "/employee/about",
    profile: "/employee/profile",
    empReport: "/employee/report",
    hr: "/hr",
    hrPage: "/hr/hrpage",
    dashboard: "/hr/dashboard",
    hrReport: "/hr/report-page",
    hrResolved: "/hr/resolved",
    url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://lukepallen.github.io/workSafe/'
}
export const ROUTES = {
    login: "/",
    callback: "/callback",
    employee: "/employee",
    landing: "/employee/about",
    dashboard: "/employee/dashboard",
    profile: "/employee/profile",
    empReport: "/employee/report",
    hr: "/hr",
    hrReport: "hr/report-page",
    url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://lukepallen.github.io/workSafe/'
}
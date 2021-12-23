export const APP_ROUTES = {
    defaultPage: 'feature/student-marks',
    bannerPage: 'banner-page',
    productListing: 'product-listing',
    timer: 'timer',
    timer1: 'timer1',
    timer2: 'timer2',
    studentMarks: 'student-marks',
    dynamicScroller: 'dynamic-scroller'
};

export const APP_ROUTES_LIST = [
    {
        path: APP_ROUTES.studentMarks,
        header: 'Marks Table'
    },
    {
        path: APP_ROUTES.bannerPage,
        header: 'Banner'
    },
    {
        path: APP_ROUTES.productListing,
        header: 'Products'
    },
    {
        header: 'Timer',
        childRoutes: [
            {
                path: APP_ROUTES.timer1,
                header: 'Input/Output Decorator' 
            },
            {
                path: APP_ROUTES.timer2,
                header: 'Subject/ Observable'
            }
        ]        
    },
    {
        path: APP_ROUTES.dynamicScroller,
        header: 'Dynamic Scroller'
    }
];
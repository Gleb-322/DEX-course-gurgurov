
import { Layout } from '../pages/layout/Layout'
import { CardPlayers } from '../pages/cardPlayers/CardPlayers'
import { CardTeams } from '../pages/cardTeams/CardTeams'
import { DetailsPlayers } from '../pages/detailsPlayers/DetailsPlayers'
import { DetailsTeams } from '../pages/detailsTeams/DetailsTeams'
import { AddPlayers } from '../pages/addPlayers/AddPlayers'
import { AddTeams } from '../pages/addTeams/AddTeams'
import { SignIn } from '../pages/signIn/SignIn'
import { SignUp } from '../pages/signUp/SignUp'
import { NotFound } from '../pages/notFound/NotFound'

// let routes: RouteObject[] = [
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         { index: true, element: <Home /> },
//         {
//           path: "/courses",
//           element: <Courses />,
//           children: [
//             { index: true, element: <CoursesIndex /> },
//             { path: "/courses/:id", element: <Course /> },
//           ],
//         },
//         { path: "*", element: <NoMatch /> },
//       ],
//     },
//   ];

export const mainRoutes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "teams",
                element: <CardTeams/>,
                children: [
                    {
                        path: "teams/:id",
                        element: <DetailsTeams />
                    },
                    {
                
                        path: "addTeam",
                        element: <AddTeams/>
                        
                    },
                ]
            },
            
            {
                path: "players",
                element: <CardPlayers/>,
                children: [
                    {
                        path: "players/:id",
                        element: <DetailsPlayers />
                    },
                    {
                        path: "addPlayer",
                        element: <AddPlayers/>
                    }
                ]
            }
        ]    
    },
    {
        path: "/signIn",
        element: <SignIn />
    },
    {
        path: "/signUp",
        element: <SignUp />
    },
    {
        path: "*",
        element: <NotFound />
    }
]
 


// export const mainRoutes = {
//     path: "/",
//     element: <Layout />,
//     children: [
//         {
//             path: "teams",
//             element: <CardTeams/>,
//             children: [
//                 {
//                     path: ":id",
//                     element: <DetailsTeams />
//                 },
//                 {
//                     path: "addTeam",
//                     element: <AddTeams/>
//                 }
//             ]
//         },
//         {
//             path: "players",
//             element: <CardPlayers/>,
//             children: [
//                 {
//                     path: ":id",
//                     element: <DetailsPlayers />
//                 },
//                 {
//                     path: "addPlayer",
//                     element: <AddPlayers/>
//                 }
//             ]
//         }
//     ]
// }

// export const signInRoute = {
//     path: "/signIn",
//     element: <SignIn />
// }
// export const signUpRoute = {
//     path: "/signUp",
//     element: <SignUp />
// }

// export const notFoundRoute = {
//     path: "*",
//     element: <NotFound />
// }

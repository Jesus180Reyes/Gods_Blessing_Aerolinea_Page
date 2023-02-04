import { Sucursales, Employees, LinksSM } from '../interfaces/sucursales-interface';

export const sucursalesLocation:Sucursales[] = [
    {
        title: "Choluteca",
        onClick: "choluteca",
        description: "Nisi voluptate esse anim veniam adipisicing amet et officia do eu.",
        phone_number:"96786859",
        locationUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.6026488428174!2d-87.17989858536744!3d13.312743790632696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f703ce471cc7225%3A0x4f642346d3a54ad6!2sUnimall!5e0!3m2!1ses-419!2shn!4v1674674473277!5m2!1ses-419!2shn",
        employees: <Employees[]>[

            {
                name: "Nohelia",
                lastName: "Solano",
                imgUrl:"https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/nohelia.png?alt=media&token=0a109a64-b2f4-4362-9d33-8e2a9d5fdd27",
                phoneNumber: "96786859"

            },
            {
                name: "Scarleth",
                lastName: "Sanchez",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/sanchez.png?alt=media&token=538e9605-0d31-4c51-a0b3-db6350a44021",
                phoneNumber: "87348911"

            },
            {
                name: "Jeffry",
                lastName: "Cruz",
                phoneNumber: "93710769",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/jefry.png?alt=media&token=e8019cc9-ac5d-4761-bf42-85c457dfbd66",
            },
            {
                name: "Fabricio",
                lastName: "Betancourth",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/fabricio.png?alt=media&token=c1535d75-d7bc-4cab-80e6-7a6c87b13b58",
                phoneNumber: "99631470"

            },
            {
                name: "Devys",
                lastName: "Valladares",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/devys.png?alt=media&token=2c77612d-ede8-48c6-8bda-b025950da9dd",
                phoneNumber: "98569015"

            },
            {
                name: "Jessyca",
                lastName: "Arriola",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/jessyca.png?alt=media&token=0cfaeefa-9b1d-43c1-b890-13fe3e58cfcd",
                phoneNumber: "98552148"

            },
           
        ],
        links:<LinksSM> {

            facebookUrl: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100083352271785%26mibextid%3DLQQJ4d&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",
            instagramUrl: "",
            tiktokUrl: "https://www.tiktok.com/@gods_blessing10?_t=8YptyhKNMSz&_r=1"

        },
        
    },
    {
        title: "Danli",
        onClick: "danli",
        description: "Nisi voluptate esse anim veniam adipisicing amet et officia do eu.",
        locationUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15484.190227781983!2d-86.5702656!3d14.0151945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6e691bf24b94c3%3A0xc40abe2b8c630507!2sGod%60s%20Blessing%20Danli!5e0!3m2!1ses-419!2shn!4v1674684608116!5m2!1ses-419!2shn",
        phone_number:"93706154",
        employees:<Employees[]> [
            {
                name: "Amalia",
                lastName: "Murillo",
                imgUrl:"https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/amalia-murillo2.png?alt=media&token=b65804a3-009c-4e7d-857d-6076f5b1d4f8",
                phoneNumber: "93706154"

            },
            {
                name: "Nuvia",
                lastName: "Flores",
                phoneNumber: "89676760",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/nuvia-flores.png?alt=media&token=79844324-161f-45c1-a8e3-5bf58e153bbf",
            },
            {
                name: "Cherly",
                lastName: "Amador",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/cherly-amador.png?alt=media&token=2d74f827-8f40-4f84-a622-09b77a28a0d3",
                phoneNumber: "93713432"

            },
            {
                name: "Katherin",
                lastName: "Amador",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/katherin-amador.png?alt=media&token=9f555904-1014-41ba-a29e-d329a6c71c34",
                phoneNumber: "99621526"

            },
            {
                name: "Ana",
                lastName: "Garcia",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/ana-garcia.png?alt=media&token=d072f640-eef4-4f5b-8996-00b21cb4a16b",
                phoneNumber: "99621526"

            },
            
        ],
         links:<LinksSM> {
            facebookUrl: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100083211076838%26mibextid%3DLQQJ4d%20&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",
            instagramUrl: "https://instagram.com/godsblessingdanli?igshid=MWI4MTIyMDE",
            tiktokUrl: "https://www.tiktok.com/@gods_blessing10?_t=8YptyhKNMSz&_r=1"

        },

    },
    {
        title: "Tegucigalpa",
        onClick: "tegucigalpa",
        description: "Nisi voluptate esse anim veniam adipisicing amet et officia do eu.",
        locationUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.0449269335763!2d-87.21504158535829!3d14.074524390139205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fbd5024d3dc6b%3A0xbdb7f2ff72f90fc0!2sMetromall!5e0!3m2!1ses-419!2shn!4v1675226374331!5m2!1ses-419!2shn",
        phone_number:"93716629",
        employees:<Employees[]> [
            {
                name: "Alejandra",
                lastName: "Avila",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/alejandra.png?alt=media&token=c88227db-182f-413f-8169-1706ee4dd8fa",
                phoneNumber: "93716629"

            },
            {
                name: "Melisa",
                lastName: "Osorio",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/melisa.png?alt=media&token=9209c488-8a8d-4fba-8046-173dddaa0933",
                phoneNumber: "88590482"

            },
            {
                name: "Breyssi",
                lastName: "Amador",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/breyssi.png?alt=media&token=7f407e2b-051e-4fb8-ae19-55fd168dbc25",
                phoneNumber: "88590686"

            },
            {
                name: "Cindy",
                lastName: "Aguilera",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/cindy.png?alt=media&token=aa9fa2a1-5825-47fe-b80d-abce9d7c4b78",
                phoneNumber: "93686714"

            },
            {
                name: "Escarleth",
                lastName: "Avila",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/escarleth.png?alt=media&token=4d77285f-08cd-48e1-b43e-e9f258f6901f",
                phoneNumber: "95391750"

            },
            {
                name: "Carlos",
                lastName: "Galindo",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/galindo.png?alt=media&token=ba4f7324-cfa3-4ab1-b5a4-6f65c06a180f",
                phoneNumber: "89676675"

            },
            {
                name: "Astrid",
                lastName: "Carmona",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/carmona.png?alt=media&token=0cbe02c8-297e-445c-a0c0-d6a13880d437",
                phoneNumber: "99078813"

            },
        ],
         links:<LinksSM> {
            facebookUrl: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100083322819873%26mibextid%3DLQQJ4d&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",
            instagramUrl: "https://instagram.com/godsblessingcholuteca?igshid=MWI4MTIyMDE",
            tiktokUrl: "https://www.tiktok.com/@gods_blessing10?_t=8YptyhKNMSz&_r=1"

        },
    },
    {
        title: "San Pedro Sula",
        onClick: "san-pedro-sula",
        description: "Nisi voluptate esse anim veniam adipisicing amet et officia do eu.",
        locationUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.533434289921!2d-87.23589438535794!3d14.104697390119828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6f9812f8939def%3A0x68410041f1b81b15!2sMall%20Premier!5e0!3m2!1ses-419!2shn!4v1675487152234!5m2!1ses-419!2shn",
        phone_number:"99504514",
        employees: <Employees[]>[
            {
                name: "Katherine",
                lastName: "Paredes",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/user.png?alt=media&token=18953b03-3c62-4e5f-bcc9-8553cd8e624c",
                phoneNumber: "99504514"

            },
            {
                name: "Lindsy",
                lastName: "Ortega",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/user.png?alt=media&token=18953b03-3c62-4e5f-bcc9-8553cd8e624c",
                phoneNumber: "93234499"

            },
            {
                name: "Ruth",
                lastName: "Sifontes",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/user.png?alt=media&token=18953b03-3c62-4e5f-bcc9-8553cd8e624c",
                phoneNumber: "98548762"

            },
            {
                name: "Ruth",
                lastName: "Hernández",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/user.png?alt=media&token=18953b03-3c62-4e5f-bcc9-8553cd8e624c",
                phoneNumber: "94393630"

            },
            {
                name: "Byron",
                lastName: "Garcia",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/user.png?alt=media&token=18953b03-3c62-4e5f-bcc9-8553cd8e624c",
                phoneNumber: "31575231"

            },
            {
                name: "Génesis",
                lastName: "Alvarado",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/user.png?alt=media&token=18953b03-3c62-4e5f-bcc9-8553cd8e624c",
                phoneNumber: "88100611"

            },
        ],

         links:<LinksSM> {
            facebookUrl: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100088902146769%26mibextid%3DLQQJ4d&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",
            instagramUrl: "https://instagram.com/godsblessingsanpedrosula?igshid=MWI4MTIyMDE",
            tiktokUrl: "https://www.tiktok.com/@gods_blessing10?_t=8YptyhKNMSz&_r=1"

        },
    },
    {
        title: "Comayagua",
        onClick: "comayagua",
        description: "Nisi voluptate esse anim veniam adipisicing amet et officia do eu.",
        locationUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.5621425654654!2d-87.64134118535362!3d14.452379189896947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f65858cd98a29e5%3A0x913b590644b51db3!2sMall%20Premier!5e0!3m2!1ses-419!2shn!4v1675227921064!5m2!1ses-419!2shn",
        phone_number:"98572856",
        employees: <Employees[]>[
            {
                name: "Nicolle",
                lastName: "Zepeda",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/nicolle.png?alt=media&token=8a2ce88f-1d2d-4c72-908a-b462ea092fdd",
                phoneNumber: "98572856"

            },
            {
                name: "Maryori",
                lastName: "Lopez",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/maryori.png?alt=media&token=907d7d38-723a-4229-9dad-ab5c91fcabd9",
                phoneNumber: "98545494"

            },
            {
                name: "Greicy",
                lastName: "Gomez",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/fir-f16bc.appspot.com/o/greicy.png?alt=media&token=94cda6bf-4b7e-4c09-ab92-4eb3ff6d0e66",
                phoneNumber: "98621285"

            },
        ],

         links:<LinksSM> {
            facebookUrl: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100086959634625%26mibextid%3DLQQJ4d&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",
            instagramUrl: "https://instagram.com/godsblessingcomayagua?igshid=MWI4MTIyMDE",
            tiktokUrl: "https://www.tiktok.com/@gods_blessing10?_t=8YptyhKNMSz&_r=1"

        },
    },
];
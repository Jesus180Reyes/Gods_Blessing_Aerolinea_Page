import { Sucursales, Employees, LinksSM } from '../interfaces/sucursales-interface';

export const sucursalesLocation:Sucursales[] = [
    {
        title: "Choluteca",
        onClick: "choluteca",
        description: "Nisi voluptate esse anim veniam adipisicing amet et officia do eu.",
        phone_number:"88513318",
        locationUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.6026488428174!2d-87.17989858536744!3d13.312743790632696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f703ce471cc7225%3A0x4f642346d3a54ad6!2sUnimall!5e0!3m2!1ses-419!2shn!4v1674674473277!5m2!1ses-419!2shn",
        employees: <Employees[]>[

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
        phone_number:"88513318",
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
        locationUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.6026488428174!2d-87.17989858536744!3d13.312743790632696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f703d61de63d83f%3A0xf917d05848bc4f8d!2sGod&#39;s%20Blessing%20Choluteca!5e0!3m2!1ses-419!2shn!4v1674668608020!5m2!1ses-419!2shn",
        phone_number:"88513318",
        employees:<Employees[]> [
            {
                name: "Luis de Jesus",
                lastName: "Reyes Nolasco",
                imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Fartist%2F60d24wfXkVzDSfLS6hyCjZ&psig=AOvVaw23-n8wX8PE4H93IcWzv_2F&ust=1674755511038000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJCbj8uk4_wCFQAAAAAdAAAAABAE",
                phoneNumber: "88513318"

            },
            {
                name: "Luis de Jesus",
                lastName: "Reyes Nolasco",
                imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Fartist%2F60d24wfXkVzDSfLS6hyCjZ&psig=AOvVaw23-n8wX8PE4H93IcWzv_2F&ust=1674755511038000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJCbj8uk4_wCFQAAAAAdAAAAABAE",
                phoneNumber: "88513318"

            }
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
        locationUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.6026488428174!2d-87.17989858536744!3d13.312743790632696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f703d61de63d83f%3A0xf917d05848bc4f8d!2sGod&#39;s%20Blessing%20Choluteca!5e0!3m2!1ses-419!2shn!4v1674668608020!5m2!1ses-419!2shn",
        phone_number:"88513318",
        employees: <Employees[]>[
            {
                name: "Luis de Jesus",
                lastName: "Reyes Nolasco",
                imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Fartist%2F60d24wfXkVzDSfLS6hyCjZ&psig=AOvVaw23-n8wX8PE4H93IcWzv_2F&ust=1674755511038000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJCbj8uk4_wCFQAAAAAdAAAAABAE",
                phoneNumber: "88513318"

            },
            {
                name: "Luis de Jesus",
                lastName: "Reyes Nolasco",
                imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Fartist%2F60d24wfXkVzDSfLS6hyCjZ&psig=AOvVaw23-n8wX8PE4H93IcWzv_2F&ust=1674755511038000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJCbj8uk4_wCFQAAAAAdAAAAABAE",
                phoneNumber: "88513318"

            }
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
        locationUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.6026488428174!2d-87.17989858536744!3d13.312743790632696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f703d61de63d83f%3A0xf917d05848bc4f8d!2sGod&#39;s%20Blessing%20Choluteca!5e0!3m2!1ses-419!2shn!4v1674668608020!5m2!1ses-419!2shn",
        phone_number:"88513318",
        employees: <Employees[]>[
            {
                name: "Luis de Jesus",
                lastName: "Reyes Nolasco",
                imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Fartist%2F60d24wfXkVzDSfLS6hyCjZ&psig=AOvVaw23-n8wX8PE4H93IcWzv_2F&ust=1674755511038000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJCbj8uk4_wCFQAAAAAdAAAAABAE",
                phoneNumber: "88513318"

            },
            {
                name: "Luis de Jesus",
                lastName: "Reyes Nolasco",
                imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Fartist%2F60d24wfXkVzDSfLS6hyCjZ&psig=AOvVaw23-n8wX8PE4H93IcWzv_2F&ust=1674755511038000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJCbj8uk4_wCFQAAAAAdAAAAABAE",
                phoneNumber: "88513318"

            }
        ],

         links:<LinksSM> {
            facebookUrl: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100086959634625%26mibextid%3DLQQJ4d&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",
            instagramUrl: "https://instagram.com/godsblessingcomayagua?igshid=MWI4MTIyMDE",
            tiktokUrl: "https://www.tiktok.com/@gods_blessing10?_t=8YptyhKNMSz&_r=1"

        },
    },
];
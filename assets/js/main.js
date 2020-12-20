
const app = new Vue({
    el: '#app',

    // data
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: "_1",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Paolo',
                avatar: "_2",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Oh Paoletto, stasera calcetto?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Dai che ce ne manca solo uno...',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: '⚽⚽⚽',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Giulio',
                avatar: "_3",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Riccardo',
                avatar: "_4",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Stefano',
                avatar: "_5",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Stefania',
                avatar: "_6",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Flora',
                avatar: "_7",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Beatrice',
                avatar: "_8",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ]
            },
        ],

        // contatto mostrato di default che in seguito cambia dinamicamente
        contactShown: null,

        // prorietà che cattura il value dell'input di scrittura del messaggio
        userMsg: null,

        // input da linea di ricerca
        searchString: "",

        // ultimo accesso - var temporanea
        lastAccessTemp: "",
    },

    // methods
    methods: {
        showContact(contact_clicked) {
            this.contactShown = contact_clicked;
            this.searchString = "";
        },
        printUserMsg() {
            const now = dayjs().format('DD/MM/YYYY HH:mm:ss');
            const newMsg = {
                date: now,
                text: this.userMsg,
                status: 'sent'
            }
            this.contactShown.messages.push(newMsg);
            this.userMsg = null;
            setTimeout(this.printReply, 1000);
        },
        printReply() {
            const now = dayjs().format('DD/MM/YYYY HH:mm:ss');
            const autoReply = {
                date: now,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sequi saepe est, blanditiis maxime itaque accusamus unde, ut minus voluptate perferendis dolore tenetur, libero voluptatem molestias facere rem animi adipisci!',
                status: 'received'
            }
            this.contactShown.messages.push(autoReply);
            this.lastAccessTemp = dayjs().format('HH:mm:ss');
            this.addLastAccess(this.lastAccessTemp);
        },
        match(contact) {
            const string = this.searchString.charAt(0).toUpperCase() + this.searchString.slice(1);
            if (contact.name.includes(string) || contact.name.includes(this.searchString)) {
                return true;
            }
        },
        addLastAccess(last_access) {
            this.contacts.forEach(contact => {
                if (this.contactShown.name === contact.name) {
                    contact.lastAccess = last_access;
                    return contact.lastAccess
                }
            });
        },
        //menu contestuale milestone5
        openMenu(this_message_index) {
            const openIcons = document.querySelectorAll('.open-menu');
            const contextMenu = openIcons[this_message_index].nextElementSibling;
            contextMenu.style.display === 'none' ? contextMenu.style.display = 'block' : contextMenu.style.display = 'none';
        },
        //cancella msg
        deleteMsg(index) {
            this.contactShown.messages.splice(index, 1);
            this.openMenu(index);
        }
    },

    created() {
        this.contactShown = this.contacts[Math.floor(Math.random() * this.contacts.length)]; //ogni volta che si carica la pagina il contatto di default viene preso casualemnte
    }
});





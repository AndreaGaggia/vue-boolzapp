/*
MILESTONE 1
Replica della grafica ​con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti:​ tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
*/

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
        contactShown: {
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
        // prorietà che cattura l'input di scirttura del messaggio
        userMsg: null,

        // input da linea di ricerca
        searchString: "",

        // ultimo accesso
        lastAccessTemp: "",
    },

    // methods
    methods: {
        showContact(contact_clicked) {
            this.contactShown = contact_clicked;
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
                text: 'prova',
                status: 'received'
            }
            this.contactShown.messages.push(autoReply);
            this.lastAccessTemp = dayjs().format('HH:mm:ss'); // non sono convinto che sia da fare così - il problema è che è uguale per tutti
            this.addLastAccess(this.lastAccessTemp);
        },
        match(contact) {
            const string = this.searchString.charAt(0).toUpperCase() + this.searchString.slice(1);
            if (contact.name.includes(string) || contact.name.includes(this.searchString)) { //non funziona con i caratteri in mezzo alla parola
                return true;
            }
        },
        addLastAccess(last_access) {
            this.contacts.forEach(contact => {
                if (this.contactShown.name === contact.name) {
                    contact.lastAccess = last_access;
                    console.log(contact);
                    return contact.lastAccess
                }
            });
        }
    }
});


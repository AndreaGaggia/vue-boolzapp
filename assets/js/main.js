const app = new Vue({
    // element watched by Vue
    el: '#app',

    // data
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: "_1",
                visible: true,
                messages: [ {date: '10/01/2020 15:30:55', text: 'Hai portato a spasso il cane?', status: 'sent'}, {date: '10/01/2020 15:50:00', text: 'Ricordati di dargli da mangiare', status: 'sent'}, {date: '10/01/2020 16:15:22', text: 'Tutto fatto!', status: 'received'} ]
            },
            {
                name: 'Paolo',
                avatar: "_2",
                visible: true,
                messages: [ {date: '20/03/2020 16:30:00', text: 'Ciao come stai?', status: 'sent'}, {date: '20/03/2020 16:30:55', text: 'Bene grazie! Stasera ci vediamo?', status: 'received'}, {date: '20/03/2020 16:35:00', text: 'Mi piacerebbe ma devo andare a fare la spesa.', status: 'sent'} ]
            },
            {
                name: 'Giulio',
                avatar: "_3",
                visible: true,
                messages: [ {date: '28/03/2020 10:10:40', text: 'La Marianna va in campagna', status: 'received'}, {date: '28/03/2020 10:20:10', text: 'Sicuro di non aver sbagliato chat?', status: 'sent'}, {date: '28/03/2020 16:15:22', text: 'Ah scusa!', status: 'received'} ]
            },
            {
                name: 'Riccardo',
                avatar: "_4",
                visible: true,
                messages: [ {date: '28/03/2020 10:10:40', text: 'Lo sai che ha aperto una nuova pizzeria?', status: 'sent'}, {date: '28/03/2020 10:20:10', text: 'Si, ma preferirei andare al cinema', status: 'received'} ]
            },
            {
                name: 'Stefano',
                avatar: "_5",
                visible: true,
                messages: [ {date: '28/03/2020 10:10:40', text: 'Bomba Stè, che dici?', status: 'sent'}, {date: '28/03/2020 10:20:10', text: 'Ueeee... tutto bene dai.', status: 'received'} ]
            },
            {
                name: 'Stefania',
                avatar: "_6",
                visible: true,
                messages: [ {date: '28/03/2020 10:10:40', text: 'Ciao Stefania sono io, ti volevo dire che stasera io ci vado... Tu che pensi di fare?', status: 'sent'}, {date: '28/03/2020 10:20:10', text: 'Chi sei?!', status: 'received'} ]
            },
            {
                name: 'Flora',
                avatar: "_7",
                visible: true,
                messages: [ {date: '28/03/2020 10:10:40', text: 'Flora bora...', status: 'sent'}, {date: '28/03/2020 10:20:10', text: 'Cretino!', status: 'received'} ]
            },
            {
                name: 'Beatrice',
                avatar: "_8",
                visible: true,
                messages: [ {date: '28/03/2020 10:10:40', text: 'Ciao Bea, stai bene con la barba!', status: 'sent'}, {date: '28/03/2020 10:20:10', text: 'Dici?! Vorrei allungarla un altro po\'', status: 'received'}, {date: '28/03/2020 10:23:10', text: 'Anche i capelli...', status: 'sent'} ]
            },
        ],

        // contatto mostrato di default che in seguito cambia dinamicamente - assegnazione casuale nel created
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
            this.lastAccessTemp = dayjs().format('HH:mm'); //non voglio anche i secondi nella visualizzazione vicino all'avatar
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

    // l-c hooks
    created() {
        this.contactShown = this.contacts[Math.floor(Math.random() * this.contacts.length)]; //ogni volta che si carica la pagina il contatto di default viene preso casualemnte
    }
});





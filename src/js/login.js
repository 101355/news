import axios from "axios"; 
import  {mapGetters}  from "vuex";
export default {
    name: 'Login',
    data() {
        return {
            userData: {
                email: '',
                password: '',                
            },
            tokenStatus: false,
            userStatus: false,
        };
    },     
    computed:{
        ...mapGetters(["storageToken","storageUserData"]),
    },
    methods: {
        home() {
            this.$router.push({
                name: 'home',
            })
        },
        login() {
            this.$router.push({
                name: 'login',
            })
        },
        logout() {
            this.$router.push({
                name: 'login',
            })
        },
        accountLogin() {
            axios.post('http://127.0.0.1:8000/api/user/login', this.userData).then((response) => {
                if (response.data.token == null) {
                    this.userStatus = true;
                } else {
                    this.userStatus = false;
                    this.$store.dispatch('setToken', response.data.token);
                    this.$store.dispatch('setUserData', response.data.user);
                    this.home();
                }
            }).catch((error) => {
                console.log(error);
            });
        },
        check() {
            console.log(this.storageToken);
            console.log(this.storageUserData);               
        },        
    },
};
    
    
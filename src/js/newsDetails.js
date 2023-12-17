import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: "NewsDetails",
    data() {
        return {
            postId: 0,
            posts: {},
            viewCount: 0,
        }
    },    
    // computed:{
    //     ...mapGetters(["storageToken","storageUserData"]),        
    // },
    computed:{
        ...mapGetters(["storageToken","storageUserData"]),        
    },
    methods: {
        loadPost(id) {
            let post = {
                postId: id,
            };
            axios
                .post("http://127.0.0.1:8000/api/post/details", post)
                .then((response) => {
                
                if (response.data.post.image != null) {
                    response.data.post.image =
                        "http://localhost:8000/postImage/" + response.data.post.image;
                } else {
                    response.data.post.image =
                        "http://localhost:8000/defaultImage/default.png";
                }
                this.posts = response.data.post;
            });
        },
        back() {
            history.back();
        },
        home() {
            this.$router.push({
                name: 'home',
            })
        },
        login() {
            this.$router.push({
                name: 'login',
            })
        }
    },
    mounted() {
        let data = {
            user_id: this.storageUserData.id,
            post_id: this.$route.query.newsId,
        };
        axios
            .post("http://127.0.0.1:8000/api/post/actionLog", data)
            .then((response) => {
                this.viewCount = response.data.post.length
            });        
        this.postId = this.$route.query.newsId;
        this.loadPost(this.postId);
    },
};
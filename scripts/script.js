class Twitter {
    constructor (settings)
    {
        this.tweets = new Posts();
        this.elements = {
            listElem: document.querySelector(settings.listElem)
        };
    }

    renderTweets()
    {

    }

    showUserTweets()
    {

    }

    showLikedTweets()
    {

    }

    showAllTweets()
    {

    }

    openModal()
    {

    }
}

class Posts {
    constructor({posts = []} = {})
    {
        this.posts = posts;
    }

    addPost(tweet)
    {
        const post = new Post(tweet);
        this.posts.push(post);
    }

    getPostIndex(postId)
    {
        return this.posts.findIndex((post) => post.id === postId);
    }

    deletePost(postId)
    {
        const index = this.getPostIndex(postId);
        this.posts.splice(index, 1);
    }

    likePost(postId)
    {
        const post = this.posts[this.getPostIndex(postId)];
        post.changeLike();
    }
}

class Post {
    constructor(settings)
    {
        this.id = settings.id;
        this.userName = settings.userName;
        this.nickname = settings.nickname;
        this.postDate = settings.postDate;
        this.text = settings.text;
        this.img = settings.img;
        this.likes = settings.likes;
        this.liked = false;
    }

    changeLike()
    {
        this.liked = !this.liked;
        if (!this.liked) {
            this.likes--;
        } else {
            this.likes++;
        }
    }
}

const twitter = new Twitter({
    listElem: ".tweet-list"
});

twitter.tweets.addPost({
    id: 1,
    userName: "maks",
    nickname: "@maks",
    postDate: "today",
    text: "text",
    img: "none",
    likes: 3,
    liked: false
});
console.log(twitter);


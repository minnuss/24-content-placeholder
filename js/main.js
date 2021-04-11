// const header = document.getElementById('header')
// const title = document.getElementById('title')
// const excerpt = document.getElementById('excerpt')
// const profile_img = document.getElementById('profile_img')
// const name = document.getElementById('name')
// const date = document.getElementById('date')

// const animated_bgs = document.querySelectorAll('.animated-bg')
// const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

const header = document.querySelector('.placeholder__content__card__header');
const title = document.querySelector('.placeholder__content__card__content--title');
const paragraph = document.querySelector('.placeholder__content__card--para');
const profileImg = document.querySelector('.placeholder__content__card--author__img');
const authorName = document.querySelector('.placeholder__content__card--author__info--name');
const date = document.querySelector('.placeholder__content__card--author__info--date');

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML =
        `<img src="https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="" class="placeholder__content__card__header--img">`
    title.innerHTML = `Lorem ipsum dolor sit amet`
    paragraph.innerHTML =
        `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tenetur, inventore?`
    profileImg.innerHTML =
        `<img src="https://api.randomuser.me/portraits/men/75.jpg" alt="" class="placeholder__content__card--author__img--img">`
    authorName.innerHTML = 'John Doe'
    date.innerHTML = '08.Oct.2020'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}


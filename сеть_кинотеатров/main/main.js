document.addEventListener("DOMContentLoaded", function () {
    const movieContainers = document.querySelectorAll(".movie-container");

    movieContainers.forEach((container) => {
        const descriptionDiv = container.querySelector(".image-description");

        container.addEventListener("mouseover", () => {
            descriptionDiv.style.opacity = 1;
        });

        container.addEventListener("mouseout", () => {
            descriptionDiv.style.opacity = 0;
        });
    });
});


    document.getElementById("today-button").addEventListener("click", function() {
        showTodayMovies();
    });

    document.getElementById("soon-button").addEventListener("click", function() {
        showSoonMovies();
    });

    function showTodayMovies() {
        
        document.querySelectorAll(".movie-container").forEach(function(movie) {
            movie.style.display = "none";
        });

        var todayMovies = document.querySelectorAll(".movie-container.today");
        todayMovies.forEach(function(movie) {
            movie.style.display = "block";
        });
    }


    function showSoonMovies() {
   
        document.querySelectorAll(".movie-container").forEach(function(movie) {
            movie.style.display = "none";
        });

        var soonMovies = document.querySelectorAll(".movie-container.soon");
        soonMovies.forEach(function(movie) {
            movie.style.display = "block";
        });
    }

    const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    }else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    }else {
        index++;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot)=> {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
gsap.registerPlugin(Draggable);

window.onload = function () {
    const timeline = document.querySelector('.timeline');
    const scroller = document.querySelector('.scroller');
    const container = document.querySelector('.container');
    const timelineWidth = timeline.offsetWidth;
    const scrollerWidth = scroller.offsetWidth;
    const gap = parseInt(window.getComputedStyle(document.body).fontSize);

    const maxDragX = timelineWidth - scrollerWidth - 2 * gap;
    for (let i = 0; i < 50; i++) {
        const marker = document.createElement('div');
        marker.classList.add('marker');
        timeline.appendChild(marker);
    }

    Draggable.create(scroller, {
        type: 'x',
        bounds: {
            minX: gap,
            maxX: timelineWidth - scrollerWidth - gap,
        },
        onDrag: function () {
            let progress = (this.x - gap) / maxDragX;
            let containerX = -400 * (timelineWidth / 100) * progress;
            gsap.to(container, {
                x: containerX,
                duration: 1,
                ease: 'power3.out',
            });
        },
    })
};
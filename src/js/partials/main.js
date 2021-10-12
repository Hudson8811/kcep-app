$(document).ready(function() {
    const reelsContainer = document.querySelector('.sidebar-left');
    const carReelsContainer = document.querySelector('.car-reels');
    const carNameTitle = document.querySelector('.car-name')
    const carWidthInput = document.querySelector('.car-size__width>input');
    const carLengthInput = document.querySelector('.car-size__length>input');
    const carReloadBtn = document.querySelector('.js-reload');
    const carClearBtn = document.querySelector('.js-clean');
    const carAutoload = document.querySelector('.js-autocomplete');
    const carLoadLengthOutput = document.querySelector('.car-count--loaded');
    const overlay = document.querySelector('.overlay');
    const autoloadMessage = document.querySelector('.controls__block--autocomplete>p')

    const pckry = new Packery( carReelsContainer, {
        itemSelector: '.car-reel',
        columnWidth: 1,
        gutter: 0,
        transitionDuration: '0.2s'
    });


    const getCar = () => {
        const options = document.querySelector('.car-options');
        const radioItems = options.querySelectorAll('input[type=radio]');
        let carWidth, carLength, radioId;

        radioItems.forEach(item => {
            if (item.checked) {
                carWidth = item.dataset.carWidth;
                carLength = item.dataset.carLenght;
                radioId = item.id;
            }
        })

        const carName = options.querySelector(`label[for=${radioId}]`).textContent;
        return {carName, carWidth, carLength}
    }

    const getCarSize = () => {
        const calculatedWidth = `${(Number(carWidthInput.value.replace(',', '.')) * 100 / 2).toFixed(1)}px`;
        const calculatedLength = `${(Number(carLengthInput.value.replace(',', '.')) * 100 / 2).toFixed(1)}px`;

        return {calculatedLength, calculatedWidth}
    }

    const setCarSize = () => {
        const carTotalLength = document.querySelector('.car-count--total');
        const carTotalWidth = document.querySelector('.car-count--total-width');
        const { calculatedWidth, calculatedLength } = getCarSize()

        carTotalLength.textContent = `${carLengthInput.value} м`
        carTotalWidth.textContent = `${carWidthInput.value} м`
        carReelsContainer.style.width = calculatedWidth;
        carReelsContainer.style.minWidth = calculatedWidth;
        carReelsContainer.style.minWidth = calculatedWidth;
        carReelsContainer.style.height = calculatedLength;
        carReelsContainer.style.maxHeight = calculatedLength;
        carReelsContainer.style.minHeight = calculatedLength;

        pckry.layout();
    }

    const setCarLoad = (action = '') => {
        pckry.shiftLayout();

        setTimeout(() => {
            const carLoadLine = document.querySelector('.car-line--load-right');
            const carLoadLineBottom = document.querySelector('.car-line--load-bottom');
            const carLoadText = document.querySelector('.car-info__text');
            const carCurrentLoad = document.querySelector('.car-reels').style.height.replace('px', '');
            const { calculatedLength } = getCarSize();
            const carLengthMeters = (parseFloat(calculatedLength.replace('px', '')) * 2) / 100
            const carLoadPercent = Number((parseFloat(carCurrentLoad) / parseFloat(calculatedLength.replace('px', '')) * 100).toFixed(1));
            const carLoadNumber = parseFloat(((carLengthMeters * carLoadPercent) / 100).toFixed(1));

            if (carLengthMeters >= carLoadNumber && action === '') {
                carLoadLengthOutput.textContent = `${((carLoadPercent * carLengthMeters) / 100).toFixed(1)} м`
                carLoadLengthOutput.style.top = `${carLoadPercent / 2.2}%`;
                carLoadLineBottom.style.top = `${carLoadPercent + 0.2}%`;
                carLoadLine.style.height = `${carLoadPercent}%`
                carLoadText.textContent = `${carLoadPercent}% (~${carLoadLengthOutput.textContent})`
            }

            if (action === 'clear' || !carReelsContainer.querySelectorAll('.car-reel').length) {
                carLoadLengthOutput.textContent = ``
                carLoadLengthOutput.style.top = '0';
                carLoadLineBottom.style.top = `52px`;
                carLoadLine.style.height = `50px`
                carReelsContainer.style.height = '0'
                carLoadText.textContent = `0% (~0м)`
            }
        }, 0)
    }



    const setCarOptions = () => {
        const car = getCar();
        carNameTitle.textContent = car.carName;
        if (car.carWidth && car.carLength) {
            carWidthInput.value = car.carWidth;
            carLengthInput.value = car.carLength;
            carWidthInput.setAttribute('readonly', 'true')
            carLengthInput.setAttribute('readonly', 'true')
        } else {
            carWidthInput.removeAttribute('readonly');
            carLengthInput.removeAttribute('readonly');
        }
        setCarSize();
    }

    setCarOptions();

    const reelSizes = {
        'okko1': {
                width: 22,
                height: 25,
            },
        'okko2': {
                width: 22,
                height: 30,
            },
        'okko3': {
                width: 23,
                height: 33,
            },
        'okko4': {
                width: 26,
                height: 33,
            },
        'okko6': {
                width: 31,
                height: 37,
            },
        '8': {
                width: 34,
                height: 43,
            },
        '10': {
                width: 32,
                height: 53,
            },
        '12A': {
                width: 43,
                height: 64,
            },
        '14': {
                width: 43,
                height: 73,
            },
        '14g': {
                width: 52,
                height: 73,
            },
        '17': {
                width: 45,
                height: 89,
            },
        '17us': {
                width: 47,
                height: 89,
            },
        '18a': {
                width: 66,
                height: 94,
            },
        '8o': {
                width: 35,
                height: 43,
            },
        '9o': {
                width: 26,
                height: 48,
            },
        '10o': {
                width: 34,
                height: 53,
            },
        '10ao': {
                width: 45,
                height: 53,
            },
        '10bo': {
                width: 35,
                height: 53,
            },
        '12Ao': {
                width: 45,
                height: 64,
            },
        '14o': {
                width: 45,
                height: 73,
            },
        '14go': {
                width: 55,
                height: 73,
            },
        '17o': {
                width: 48,
                height: 88,
            },
        '18o': {
                width: 59,
                height: 94,
            },
        '18ao': {
                width: 70,
                height: 94,
            },
        '18bo': {
                width: 70,
                height: 94,
            },
        '20o': {
                width: 65,
                height: 104,
            },
        '20ao': {
                width: 68,
                height: 104,
            },
        '25o': {
                width: 84,
                height: 130,
            }
        }

    function applyDraggable(reel) {
        const draggie = new Draggabilly(reel);
        pckry.bindDraggabillyEvents( draggie )

        draggie.on('dragEnd', function(event, pointer) {
            const { left, bottom, right, top } = carReelsContainer.getBoundingClientRect();
            const pointerX = pointer.pageX;
            const pointerY = pointer.pageY;
            const isReelDraggedOut = pointerX < left || pointerX > right || pointerY > bottom || pointerY < top;

            if (isReelDraggedOut) {
                removeReel(reel)
                setCarLoad()
            }
            pckry.layout()
        })
    }

    function setCarLoadedReelsInfo(className, reelType) {
        const infoBlock = document.querySelector('.car-info__reel');
        const reels = carReelsContainer.querySelectorAll(`.${className}`);
        const text = document.createElement('p');
        const addedClass = `car-info__reel-${reelType}`;
        const matches = infoBlock.querySelector(`.${addedClass}`);

        text.classList.add(addedClass)

        if (matches) {
            matches.textContent = `Барабан № ${reelType} - ${reels.length} шт.`
        } else {
            infoBlock.append(text);
            text.textContent = `Барабан № ${reelType} - ${reels.length} шт.`
        }

        if (reels.length === 0) {
            text.textContent = '';
            matches.textContent = ''
        }

    }

    function createNewReel(reelType, imgSrc) {
        const newReel = document.createElement('div');
        const img = document.createElement('img');
        img.src = imgSrc;

        newReel.append(img);

        newReel.style.cssText = `
            width: ${reelSizes[reelType].width}px;
            height: ${reelSizes[reelType].height}px;
        `
        newReel.classList.add('car-reel', `car-reel--type-${reelType}`)
        setTimeout(() => {setCarLoadedReelsInfo(newReel.classList[1], reelType)}, 0)
        return newReel;
    }

    function availabilityOfAddingReel(reel) {
        const containerCoords = carReelsContainer.getBoundingClientRect();
        const reelHeight = reel.style.height
        const reelTop = reel.style.top
        const reelLeft = reel.style.left
        const reelWidth = reel.style.width
        const reelBottomEdge = Number(reelHeight.replace('px', '')) + Number(reelTop.replace('px', ''))
        const reelRightEdge = Number(reelWidth.replace('px', '')) + Number(reelLeft.replace('px', ''))

        return !(reelBottomEdge > containerCoords.height - 5 || reelRightEdge > containerCoords.width);
    }

    function removeReel(reel) {
        pckry.remove(reel);
    }

    let reelTypeClass,
        reelType,
        imgSrc;

    function getReelParams(reel = null) {
        if (reel) {
            reelTypeClass = reel.classList[1].split('-');
            reelType = reelTypeClass[reelTypeClass.length - 1];
            imgSrc = reel.querySelector('img').src;
        }

        return {reelType, imgSrc}
    }

    function createReels() {
        const input = reelsContainer.querySelector('input');
        const count = input.value;

        if (parseFloat(count)) {
            if (input.value >= 136) {
                input.value = '135';
            }

            const {reelType, imgSrc} = getReelParams();

            for (let i = 0; i < input.value; i++) {
                const newReel = createNewReel(reelType, imgSrc);
                appendReel(newReel)
            }
            setCarLoad();

            this.removeEventListener('click', createReels)
            this.closest('.car-reels-count').querySelector('input').removeEventListener('input', setReelsCount)
            this.closest('.car-reels-count').remove()
            overlay.classList.remove('active');
        }
    }

    function appendReel(newReel) {
        carReelsContainer.append(newReel);
        pckry.appended(newReel);
        applyDraggable(newReel);
    }

    function setReelsCount(e) {
        this.value = this.value.replace(/\D/, '')
    }

    function addReelsCountInput(positionX, positionY) {
        const wrap = document.createElement('div');
        const input = document.createElement('input');
        const button = document.createElement('button');

        wrap.classList.add('car-reels-count')
        input.classList.add('car-reels-count__input')
        input.setAttribute('type', 'text')
        input.setAttribute('maxLength', '3')
        button.classList.add('car-reels-count__button')
        button.textContent = 'Добавить'

        wrap.append(input)
        wrap.append(button)
        wrap.style.cssText = `
            position: absolute;
            top: ${positionY}px;
            left: ${positionX}px;
            z-index: 5;
        `

        reelsContainer.append(wrap)
        button.addEventListener('click', createReels);
        input.addEventListener('input', setReelsCount)
    }

    reelsContainer.addEventListener('click', e => {
        const target = e.target;
        const reel = target.closest('.reel');
        const activeReel = reelsContainer.querySelector('.reel.active');

        if (activeReel) {
            activeReel.classList.remove('active')
        }

        if (reel) {
            reel.classList.add('active')
            autoloadMessage.classList.remove('active');
        }
    })

    reelsContainer.addEventListener('dblclick', e => {
        e.preventDefault()
        e.stopPropagation()
        const target = e.target;
        const reel = target.closest('.reel');
        if (reel) {
            const reelType = reel.dataset.reelType;
            const imgSrc = reel.querySelector('img').src;
            const newReel = createNewReel(reelType, imgSrc);

            appendReel(newReel)
            setCarLoad()
        }
    })

    document.addEventListener('change', e => {
        const target = e.target;
        const carOptions = target.closest('.car-options__radio');

        if (carOptions) {
            setCarOptions();
            setCarLoad();
        }
    })

    carWidthInput.addEventListener('input', e => {
        setCarSize();
    })
    carLengthInput.addEventListener('input', e => {
        setCarSize();
    })

    carClearBtn.addEventListener('click', () => {
        pckry.remove( document.querySelectorAll('.car-reel') )
        pckry.shiftLayout();
        setTimeout(() => {setCarLoad('clear')}, 0)
    })

    carReloadBtn.addEventListener('click', () => {
        carReloadBtn.setAttribute('disabled',true);

        const items = document.querySelectorAll('.car-reel');

        pckry.remove( items );
        pckry.layout();

        const arr = Array.from(items);


        arr.sort((a, b) => {
            const aHeight = a.style.height.replace('px', '');
            const bHeight = b.style.height.replace('px', '');
            if (aHeight < bHeight) {
                return 1
            }
            if (aHeight > bHeight) {
                return -1
            }
            if (aHeight === bHeight) {
                return 0
            }
        })

        setTimeout(()=>{

            arr.forEach(item => {
                const removedClassName = item.classList[1];
                const typeClassArr = removedClassName.split('-');
                const type = typeClassArr[typeClassArr.length - 1]
                const imgSrc = item.querySelector('img').src

                const newReel = createNewReel(type, imgSrc)

                appendReel(newReel)
            })
            pckry.layout();
            carReloadBtn.removeAttribute('disabled');
        },100)
    })

    pckry.on( 'layoutComplete', () => {
        carReelsContainer.querySelectorAll('.car-reel').forEach(reel => {
            const isAvailable = availabilityOfAddingReel(reel);
            if (!isAvailable) {
                removeReel(reel);
            }
        })
    });

    pckry.on('removeComplete', function(removedItems) {
        removedItems.forEach(item => {
            const removedClassName = item.element.classList[1];
            const typeClassArr = removedClassName.split('-');
            const type = typeClassArr[typeClassArr.length - 1]
            setTimeout(() => {setCarLoadedReelsInfo(removedClassName, type)}, 0)
        })
    })

    carReelsContainer.addEventListener('dblclick', e => {
        const target = e.target;

        const reel = target.closest('.car-reel');

        if (reel) {
            getReelParams(reel)

            const positionX = e.clientX;
            const positionY = e.clientY;

            addReelsCountInput(positionX, positionY)
            overlay.classList.add('active');
        }
    })

    carAutoload.addEventListener('click', function() {
        carAutoload.setAttribute('disabled',true);
        const activeReel = reelsContainer.querySelector('.reel.active');

        if (activeReel) {
            const reelType = activeReel.dataset.reelType;
            const imgSrc = activeReel.querySelector('img').src;

            for (let i = 0; i < 135; i++) {
                const newReel = createNewReel(reelType, imgSrc);
                appendReel(newReel)
            }

            setCarLoad()
        } else {
            autoloadMessage.classList.add('active');
        }

        setTimeout(function (){
            carAutoload.removeAttribute('disabled');
        },200);

    })

    overlay.addEventListener('click', function() {
        overlay.classList.remove('active');
        document.querySelector('.car-reels-count').remove();
    })
})
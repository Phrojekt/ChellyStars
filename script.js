const XiaoModal = {
    open(){
        document
            .querySelector('.ModalOverlay1')
            .classList
            .add('active')
        },
        close(){
            document
                .querySelector('.ModalOverlay1')
                .classList
                .remove('active')
        }
}

const HuTaoModal = {
    open(){
        document
            .querySelector('.ModalOverlay2')
            .classList
            .add('active')
        },
        close(){
            document
                .querySelector('.ModalOverlay2')
                .classList
                .remove('active')
        }
}

const ZhongliModal = {
    open(){
        document
            .querySelector('.ModalOverlay3')
            .classList
            .add('active')
        },
        close(){
            document
                .querySelector('.ModalOverlay3')
                .classList
                .remove('active')
        }
}

const ThomaModal = {
    open() {
        document
            .querySelector('.ModalOverlay4')
            .classList
            .add('active')
    },
    close(){
        document
            .querySelector('.ModalOverlay4')
            .classList
            .remove('active')
    }
}

const RaidenModal = {
    open() {
        document
            .querySelector('.ModalOverlay5')
            .classList
            .add('active')
    },
    close(){
        document
            .querySelector('.ModalOverlay5')
            .classList
            .remove('active')
    }
}

var Music =  document.getElementById('player').autoplay = true
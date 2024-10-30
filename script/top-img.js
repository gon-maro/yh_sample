window.onload = function() {
    //1枚目にclass追加
    let toggle_img_1 = document.getElementById('toggle_img_1');
    toggle_img_1.classList.toggle('to-toggle');

    setTimeout(function(){
        //二枚目にclass追加
        let toggle_img_2 = document.getElementById('toggle_img_2');
        toggle_img_2.classList.toggle('to-toggle');
    }, 3000)

    setTimeout(function(){
        //3枚目にclass追加
        let toggle_img_3 = document.getElementById('toggle_img_3');
        toggle_img_3.classList.toggle('to-toggle');
    }, 6000)

    setTimeout(function(){
        //4枚目にclass追加
        let toggle_img_4 = document.getElementById('toggle_img_4');
        toggle_img_4.classList.toggle('to-toggle');
    }, 9000)

    setInterval(function() {
        // 複数のIDのリスト
        const ids = ['toggle_img_1','toggle_img_2','toggle_img_3','toggle_img_4'];
        // 各IDに対してループ処理を行い、クラスを削除する
        ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.remove('to-toggle');
        }
        });

        setTimeout(function(){
            //一枚目にclass追加
            let toggle_img_1 = document.getElementById('toggle_img_1');
            toggle_img_1.classList.toggle('to-toggle');
        }, 18)//←なぜかタイムアウトつけないとアニメーション効かない

        setTimeout(function(){
            //二枚目にclass追加
            let toggle_img_2 = document.getElementById('toggle_img_2');
            toggle_img_2.classList.toggle('to-toggle');
        }, 3000)

        setTimeout(function(){
            //3枚目にclass追加
            let toggle_img_3 = document.getElementById('toggle_img_3');
            toggle_img_3.classList.toggle('to-toggle');
        }, 6000)

        setTimeout(function(){
            //3枚目にclass追加
            let toggle_img_4 = document.getElementById('toggle_img_4');
            toggle_img_4.classList.toggle('to-toggle');
        }, 9000)
    }, 12000);
};
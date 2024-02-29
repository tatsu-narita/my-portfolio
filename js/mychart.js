var ctx = document.getElementById("skillChart").getContext('2d');
var skillChart = new Chart(ctx, {
    type: 'radar',
    data: {
        //データ項目
        labels: ["HTML/CSS", "JavaScript", "React", "Next.js", "PHP"],
        //データ設定
        datasets: [
            {
                //項目順
                data: [3,3,3,3,2],
                //グラフラベル
                label: "使用可能言語/フレーム・ライブラリ",
                //背景色
                backgroundColor: "rgba(67, 133, 215, 0.5)",
                //線の終端設定
                borderCapStyle: "butt",
                //線の色
                borderColor: "rgba(67, 133, 215, 1)",
            }
        ]
    },
    options: {
        scales: {
            r: {
                //グラフの値
                min: 0,
                max: 4,
                ticks: {
                    stepSize: 1 //目盛間隔
                }
            }
        }
    }
});

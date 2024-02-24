import Chart from "chart.js/dist/chart.umd";

var ctx = document.getElementById("skillChart");
var skillChart = new Chart(ctx, {
    type: 'radar',
    data: {
        //データ項目
        labels: ["HTML/CSS", "JavaScript", "React", "Next.js", "PHP"],
        //データ設定
        datasets: [
            {
                //項目順
                data: [1,2,3,4,5],
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
                max: 5,
            }
        }
    }
});

var ctx = document.getElementById("skillChart-2").getContext('2d');
var skillChart = new Chart(ctx, {
    type: 'radar',
    data: {
        //データ項目
        labels: ["Git/GitHuv", "Docker", "Teams", "NotionNotion", "Figma/AdobePhotoshop"],
        //データ設定
        datasets: [
            {
                //項目順
                data: [3,2,3,3,3],
                //グラフラベル
                label: "DevOps/その他ツール",
                //背景色
                backgroundColor: "rgba(255, 133, 215, 0.5)",
                //線の終端設定
                borderCapStyle: "butt",
                //線の色
                borderColor: "rgba(255, 0, 0, 1)",
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

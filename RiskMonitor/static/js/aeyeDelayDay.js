$(document).ready(function(){
    $.get("../api/index?format=json&table=aeyedelayrate&content=list",function(dataset){
        var delay0 = [];
        var delay3 = [];
        var delay7 = [];
        var delay10 = [];
        var delay20= [];
        var delayM1 = [];
        var delayM2 = [];
        var delayM3 = [];
        var times = [];

        for(i=0;i<dataset.length;i++){
            delay0.push(dataset[i]['delayRate0']);
            delay3.push(dataset[i]['delayRate3']);
            delay7.push(dataset[i]['delayRate7']);
            delay10.push(dataset[i]['delayRate10']);
            delay20.push(dataset[i]['delayRate20']);
            delayM1.push(dataset[i]['delayRateM1']);
            delayM2.push(dataset[i]['delayRateM2']);
            delayM3.push(dataset[i]['delayRateM3']);
            times.push(dataset[i]['createDate']);
        }
        var myChart = echarts.init(document.getElementById('main'));
        var option = {
            title: {
                text: '逾期率',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 25,
                },
                left: '6%'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                icon: 'rect',
                itemWidth: 14,
                itemHeight: 5,
                itemGap: 13,
                data: ['首逾率','逾期率3+','逾期率7+','逾期率10+','逾期率20+','逾期率M1','逾期率M2','逾期率M3'],
                right: '4%',
                textStyle: {
                    fontSize: 12,
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                data: times
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14
                    }
                },
            }],
            dataZoom: [
                {
                    type: 'inside',
                    start: 80,
                    end: 100
                },
                {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                        }
                    }
                ],
            series: [{
                name: '首逾率',
                type: 'line',
                smooth: true,
                data: delay0
            }, {
                name: '逾期率3+',
                type: 'line',
                smooth: true,
                data: delay3
            },{
                name: '逾期率7+',
                type: 'line',
                smooth: true,
                data: delay7
            },{
                name: '逾期率10+',
                type: 'line',
                smooth: true,
                data: delay10
            },{
                name: '逾期率20+',
                type: 'line',
                smooth: true,
                data: delay20
            },{
                name: '逾期率M1',
                type: 'line',
                smooth: true,
                data: delayM1
            },{
                name: '逾期率M2',
                type: 'line',
                smooth: true,
                data: delayM2
            },{
                name: '逾期率M3',
                type: 'line',
                smooth: true,
                data: delayM3
            }]
        };
        myChart.setOption(option);

        
        html_result = '' + 
        '<table class="table" style="width: 100%;margin:0 auto;"> '+
        '<thead class="fixedThead" style="width: 100%"> '+
            '<tr><th>时间</th><th>首逾率</th><th>逾期率3+</th><th>逾期率7+</th><th>逾期率10+</th><th>逾期率20+</th><th>逾期率M1</th><th>逾期率M2</th><th>逾期率M3</th></tr> '+
        '</thead> '+
        '<tbody class="scrollTbody" style="width: 100%;""> '
        lnum = times.length
        for (var i = 1; i <= lnum; i++)
        {
            html_result += '<tr>';
            html_result += '<td>'+times[lnum-i]+'</td>';
            html_result += '<td>'+delay0[lnum-i]+"%"+'</td>';
            html_result += '<td>'+delay3[lnum-i]+"%"+'</td>';
            html_result += '<td>'+delay7[lnum-i]+"%"+'</td>';
            html_result += '<td>'+delay10[lnum-i]+"%"+'</td>';
            html_result += '<td>'+delay20[lnum-i]+"%"+'</td>';
            html_result += '<td>'+delayM1[lnum-i]+"%"+'</td>';
            html_result += '<td>'+delayM2[lnum-i]+"%"+'</td>';
            html_result += '<td>'+delayM3[lnum-i]+"%"+'</td>';
            html_result += '</tr>';
        }
        html_result += '</tbody> </table> '
        document.getElementById('data').innerHTML=html_result;
    });
    $.get("../api/index?format=json&table=aeyedelayrateno&content=list",function(dataset){
        var myChart = echarts.init(document.getElementById('main1'));
        var delayOld = [];
        var delayNew = [];
        var times = [];
        for(i=0;i<dataset.length;i++){
            delayOld.push(dataset[i]['oldDelayRate3']);
            delayNew.push(dataset[i]['newDelayRate3']);
            times.push(dataset[i]['createDate']);
        }
        var option = {
            title: {
                text: '新老逾期率3+',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 25,
                },
                left: '6%'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                icon: 'rect',
                itemWidth: 14,
                itemHeight: 5,
                itemGap: 13,
                data: ['逾期率3+(新)','逾期率3+(老)'],
                right: '4%',
                textStyle: {
                    fontSize: 12,
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                data: times
            }],
            yAxis: [{
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14
                    }
                },
            }],
            dataZoom: [
                {
                    type: 'inside',
                    start: 80,
                    end: 100
                },
                {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }
            ],
            series: [
            {
                name: '逾期率3+(新)',
                type: 'line',
                smooth: true,
                data: delayNew
            },
            {
                name: '逾期率3+(老)',
                type: 'line',
                smooth: true,
                data: delayOld
            }]
        }
        myChart.setOption(option);
    });
});
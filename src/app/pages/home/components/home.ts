import {Component} from '@angular/core';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster/angular2-toaster';
import {Router} from '@angular/router';
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/pie');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
import {HomeService} from '../services/homeService';
@Component({
  selector: 'home',
  template: require('./home.html'),
  directives: [DROPDOWN_DIRECTIVES,ToasterContainerComponent],
  styles: [
    require('./home.css')
  ],
  providers: [HomeService,ToasterService]
})
export class HomeCmp {
  public loading : boolean = true;
  public error: any;
  constructor(
    private  router: Router,
    private homeService : HomeService,
    private toasterService : ToasterService) {
  }

  ngOnInit() {
    this.months = this.homeService.getMonths();
    this.getSalesPresentation();
    this.getTransactionData();
    this.getCustomerData();
  }

  public toasterconfig : ToasterConfig =
      new ToasterConfig({
        showCloseButton: true,
        timeout: 1500,
        limit: 1
      });

  public months : any = [];
  /**
   * 销售简报模块开始
   */
  public selectSalesMonthStr : string  = '本月数据';
  public selectSalesMonthVal : string = `${this.getNowTime().month.toString()}`;

  /**
   * 选择销售月份
   * @param month
     */
  selectSalesMonth(month): void {
    this.selectSalesMonthStr = month.monthStr;
    this.selectSalesMonthVal = month.month;
    this.getSalesPresentation();
  }
  /**
   * 获得当前时间
   */

  getNowTime() : any {
    let myDate = new Date();
    let year = myDate.getFullYear();
    let month = myDate.getMonth()+1 < 10 ? `0${myDate.getMonth()+1}`: myDate.getMonth()+1 < 10;
    return {
      year: year,
      month: month
    };
  }

  /**
   * 处理时间
   */
  returnSalesYearAndMonth(): string {
    return `${this.getNowTime().year}${this.selectSalesMonthVal}`;
  }
  /**
   * 销售简报
   */
  public salesPresentation : any = {};
  /**
   * 获得销售简报
   */
  getSalesPresentation() : void{
    let month = this.returnSalesYearAndMonth();
    this.loading = true;
    this.homeService.getSalesPresentation(month)
      .then( res => {
        this.salesPresentation = res;
        this.loading = false;
      })
      .catch(error => {
        this.error = error;
        this.toasterService.pop('error', '警告', '销售简报访问失败');
        this.loading = false;
      });
  }

  /**
   * 获得客户数据开始
   */

  getCustomerData() : void{
    this.homeService.getCustomerData()
      .then( res => {
        let  ele = document.getElementById('main3');
        let subtext = `客户数量: ${res.customerQuantity || 0}`;
        let title = '客户类型';
        let legendDta = ['新客户','成熟客户','云修客户','断约客户'];
        let seriesData = [
          {value:res.newCustomerQuantity || 0, name:'新客户'},
          {value:res.matureCustomerQuantity || 0, name:'成熟客户'},
          {value:res.legendCustomerQuantity || 0, name:'云修客户'},
          {value:res.breakUpCustomerQuantity || 0, name:'断约客户'}];
        let seriesName = '销售来源';
        this.createEchart(ele,title,subtext,legendDta,seriesData,seriesName);
        this.loading = false;
      })
      .catch(error => {
        this.error = error;
        this.toasterService.pop('error', '警告', '销售来源访问失败');
        this.loading = false;
      });
  }
  /**
   * 交易数据模块开始
  */
  public selectTransactionMonthStr : string = '本月数据';
  public selectTransactionMonthVal : string = `${this.getNowTime().month.toString()}`;
  /**
   * 选择交易月份
   * @param month
   */
  selectTransactionMonth(month) :void {
    this.selectTransactionMonthStr = month.monthStr;
    this.selectTransactionMonthVal = month.month;
    this.getTransactionData();
  }

  /**
   * 返回交易时间
   */
  returnTransactionYearAndMonth() : string {
    return `${this.getNowTime().year}${this.selectTransactionMonthVal}`;
  }

  public transactionData : any = {};

  /**
   * 工厂生产图表(后面拿出去作为service)
   */
  createEchart(element: any,title: string,subtext: string ,legendDta: any[], seriesData: any[],seriesName: string) : void {
    let option = {
      title : {
        text: title,
        subtext: subtext,
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: legendDta
      },
      series : [
        {
          name: '销售来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:seriesData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    var myChart= echarts.init(element);
    myChart.setOption(option);
  }
  /**
   * 获得交易数据
   */
  getTransactionData() : void {
    let month = this.returnTransactionYearAndMonth();
    this.homeService.getTransactionData(month)
      .then( res => {
        this.transactionData = res;
        this.createSales();
        this.createSalesType();
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
        this.error = error;
        this.toasterService.pop('error', '警告', '交易数据访问失败');
      });
  }

  /**
   * 产品分类图表
   */
  createSales():void {
    let res = this.transactionData;
    let ele1 = document.getElementById('main1');
    let subtext = `订单总金额: ${res.receivedPaymentOrderAmount}`;
    let title = '商品分类';
    let legendDta = ['自营产品','非自营产品'];
    let seriesData = [
      {value:res.receivedPaymentSelfSupportOrderAmount || 0, name:'自营产品'},
      {value:res.receivedPaymentNonOrderAmount || 0, name:'非自营产品'}];
    let seriesName = '销售来源';
    this.createEchart(ele1,title,subtext,legendDta,seriesData,seriesName);
  }

  /**
   * 全部产品产品类型图表
   */
  createSalesType() : void {
    let res = this.transactionData;
    let ele2 = document.getElementById('main2');
    let subtext2 = '';
    let title2 = '商品类型';
    let legendDta2 = ['油品','电瓶','轮胎','养护','配件', '设备'];
    let seriesData2 = [
      {value:res.receivedPaymentOilOrderAmount || 0, name:'油品业绩回款订单金额'},
      {value:res.receivedPaymentBatteryOrderAmount || 0, name:'电瓶业绩回款订单金额'},
      {value:res.receivedPaymentTyreOrderAmount || 0, name:'轮胎业绩回款订单金额'},
      {value:res.receivedPaymentMaintainOrderAmount || 0, name:'养护业绩回款订单金额'},
      {value:res.receivedPaymentAutopartsOrderAmount || 0, name:'配件业绩回款订单金额'},
      {value:res.receivedPaymentEquipmentOrderAmount || 0, name:'设备业绩回款订单金额'},];
    let seriesName2 = '销售来源';
    this.createEchart(ele2, title2, subtext2,legendDta2, seriesData2, seriesName2);
  }

  /**
   * 自营产品类别
   */
  createOwnerSalesType() {
    let res = this.transactionData;
    let ele2 = document.getElementById('main2');
    let subtext2 = '';
    let title2 = '商品类型';
    let legendDta2 = ['油品','电瓶','轮胎','养护','配件', '设备'];
    let seriesData2 = [
      {value:res.receivedPaymentSelfSupportOilOrderAmount || 0, name:'油品业绩回款订单金额'},
      {value:res.receivedPaymentSelfSupportBatteryOrderAmount || 0, name:'电瓶业绩回款订单金额'},
      {value:res.receivedPaymentSelfSupportTyreOrderAmount || 0, name:'轮胎业绩回款订单金额'},
      {value:res.receivedPaymentSelfSupportMaintainOrderAmount || 0, name:'养护业绩回款订单金额'},
      {value:res.receivedPaymentSelfSupportAutopartsOrderAmount || 0, name:'配件业绩回款订单金额'},
      {value:res.receivedPaymentSelfSupportEquipmentOrderAmount || 0, name:'设备业绩回款订单金额'},];
    let seriesName2 = '销售来源';
    this.createEchart(ele2, title2, subtext2,legendDta2, seriesData2, seriesName2);
  }

  /**
   * 非自营产品分类
   */
  createUnOwnerSales() :void {
    let res = this.transactionData;
    let ele2 = document.getElementById('main2');
    let subtext2 = '';
    let title2 = '商品类型';
    let legendDta2 = ['油品','电瓶','轮胎','养护','配件', '设备'];
    let seriesData2 = [
      {value:res.receivedPaymentOilOrderAmount-res.receivedPaymentSelfSupportOilOrderAmount || 0, name:'油品业绩回款订单金额'},
      {value:res.receivedPaymentBatteryOrderAmount-res.receivedPaymentSelfSupportBatteryOrderAmount || 0, name:'电瓶业绩回款订单金额'},
      {value:res.receivedPaymentTyreOrderAmount-res.receivedPaymentSelfSupportTyreOrderAmount || 0, name:'轮胎业绩回款订单金额'},
      {value:res.receivedPaymentMaintainOrderAmount-res.receivedPaymentSelfSupportMaintainOrderAmount || 0, name:'养护业绩回款订单金额'},
      {value:res.receivedPaymentAutopartsOrderAmount-res.receivedPaymentSelfSupportAutopartsOrderAmount || 0, name:'配件业绩回款订单金额'},
      {value:res.receivedPaymentEquipmentOrderAmount-res.receivedPaymentSelfSupportEquipmentOrderAmount || 0, name:'设备业绩回款订单金额'},];
    let seriesName2 = '销售来源';
    this.createEchart(ele2, title2, subtext2,legendDta2, seriesData2, seriesName2);
  }

  /**
   * 跳转到销售简报
   */
  goToSalesReport():void {
    this.router.navigate(['SalesReports']);
  }

  /**
   * 跳转到客户数据
   */
  goToCustomerData(): void{
    this.router.navigate(['CustomerData']);
  }
  /**
   * 跳转到订单数据
   */
  goToOrderData(): void{
    this.router.navigate(['OrderData']);
  }
}

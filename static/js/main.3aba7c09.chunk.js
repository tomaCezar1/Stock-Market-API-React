(this["webpackJsonpstock-market-app"]=this["webpackJsonpstock-market-app"]||[]).push([[0],{12:function(e,t,a){e.exports=a(26)},17:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(9),o=a.n(s),r=(a(17),a(6),a(7)),l=a.n(r),i=a(10),u=a(1),h=a(2),m=a(5),p=a(4),f=a(3),d=a(11),y=a.n(d),g=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={isClicked:!1},e.inputClick=function(){var t=e.state.isClicked;e.setState({isClicked:!t}),console.log(e.state.isClicked)},e.onBlur=function(){e.setState({isClicked:!1})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state.isClicked;return c.a.createElement("div",{style:v},c.a.createElement("h1",{className:"header-h1"},"React Stock Market"),c.a.createElement("p",null,"Stock Market API"),c.a.createElement("div",{className:"wrapper"},c.a.createElement("input",{className:"header-input ".concat(e?"clicked-input":""),type:"text",placeholder:"Pick a stock (e.g. BABA, ZM, AAPL, GOLD)",onClick:this.inputClick,onBlur:this.onBlur,onKeyDown:this.props.inputHandler}),c.a.createElement("i",{onClick:this.props.secondFetch,className:"fas fa-search fa-2x"})))}}]),a}(c.a.Component),v={color:"#ffffff",backgroundColor:"#252529",padding:"1.2rem",letterSpacing:"2px",paddingBottom:"2rem"},k=g,E=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"quotes-container"},c.a.createElement("h1",null,this.props.symbolName," - ",this.props.name," "),c.a.createElement("p",{className:"box-items"}," ",c.a.createElement("span",{className:"quotes",id:""},"52 Week High")," ",c.a.createElement("span",{className:"year-high"},this.props.YearHigh)),c.a.createElement("p",{className:"box-items"}," ",c.a.createElement("span",{className:"quotes",id:""},"52 Week Low")," ",c.a.createElement("span",{className:"year-low"},this.props.YearLow)),c.a.createElement("p",{className:"box-items"}," ",c.a.createElement("span",{className:"quotes",id:""},"Volume")," ",c.a.createElement("span",{className:"blue-data"},this.props.volume)),c.a.createElement("p",{className:"box-items"}," ",c.a.createElement("span",{className:"quotes",id:""},"Close")," ",c.a.createElement("span",{className:"blue-data"},this.props.closePrice)),c.a.createElement("p",{className:"box-items"}," ",c.a.createElement("span",{className:"quotes",id:""},"Changed Percent")," ",c.a.createElement("span",{className:"blue-data"},this.props.changeP)))}}]),a}(n.Component),b=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={count:20,message:"Only 5 API requests per minute allowed..."},e.intervalChange=function(){var t=setInterval((function(){0===e.state.count?(clearInterval(t),e.setState({message:"Search a new stock!"})):e.setState({count:e.state.count-1})}),1e3)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.intervalChange()}},{key:"render",value:function(){return c.a.createElement("div",{className:"countdown-div"},this.state.count>0?c.a.createElement("h1",{style:w},this.state.count):c.a.createElement("h1",{style:C},this.state.count),this.state.count>0?c.a.createElement("h1",{className:"h1-message",style:O},this.state.message):c.a.createElement("h1",{className:"h1-message",style:N},this.state.message))}}]),a}(n.Component),w={fontSize:"3rem",marginBottom:"-0.4rem"},C={opacity:"0"},N={color:"#FF0000",fontStyle:"bolder",fontSize:"2.2rem"},O={color:"#000"},S=b,j=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={stockChartXValues:[],stockChartYValues:[],open:0,volume:0,symbol:"",changePercent:0,close:0,YearHigh:0,YearLow:0,name:"",searchKeyword:"TSLA"},n.componentDidMount=function(){n.fetchStock(),n.fetchQuote(),n.fetchCompanyOverview()},n.fetchStock=function(){var e="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=".concat(n.state.searchKeyword,"&outputsize=compact&apikey=").concat(n.API_KEY),t=[],a=[];fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e);var c=e["Time Series (Daily)"],s=c[Object.keys(c)[0]]["6. volume"];for(var o in s=Number(s).toLocaleString(),console.log(s),c)t.push(o),a.push(c[o]["1. open"]);n.setState({stockChartXValues:t,stockChartYValues:a,volume:s},(function(){console.log("fetching data is done!")}))})).catch((function(e){return console.log(e)}))},n.fetchQuote=function(){var e="https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=".concat(n.state.searchKeyword,"&apikey=").concat(n.API_KEY);fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e["Global Quote"]["01. symbol"],a=e["Global Quote"]["10. change percent"],c=e["Global Quote"]["02. open"];n.setState({symbol:t,changePercent:a,close:c})})).catch((function(e){return console.log(e)}))},n.fetchCompanyOverview=function(){var e="https://www.alphavantage.co/query?function=OVERVIEW&symbol=".concat(n.state.searchKeyword,"&apikey=").concat(n.API_KEY);fetch(e).then((function(e){return e.json()})).then((function(e){var t=e["52WeekHigh"],a=e["52WeekLow"],c=e.Name;console.log(e),console.log(c),n.setState({YearHigh:t,YearLow:a,name:c})})).catch((function(e){return console.log(e)}))},n.changeKeyword=function(){var e=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.value,"Enter"!==t.key){e.next=11;break}return n.setState({searchKeyword:a}),e.next=5,console.log(n.state.searchKeyword);case 5:return e.next=7,console.log(n.state.searchStock);case 7:return e.next=9,n.secondFetch();case 9:return e.next=11,console.log("Enter key pressed");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.secondFetch=function(){n.fetchStock(),n.fetchQuote(),n.fetchCompanyOverview()},n.API_KEY="FXJPC8WQRZ2JZN9O",n.changeKeyword=n.changeKeyword.bind(Object(m.a)(n)),n}return Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(k,{inputHandler:this.changeKeyword,inputValue:this.state.searchKeyword,secondFetch:this.secondFetch}),c.a.createElement(S,{didSearch:this.state.searchStock}),c.a.createElement(E,{symbolName:this.state.symbol,YearHigh:this.state.YearHigh,YearLow:this.state.YearLow,changeP:this.state.changePercent,closePrice:this.state.close,volume:this.state.volume,name:this.state.name}),c.a.createElement(y.a,{data:[{x:this.state.stockChartXValues,y:this.state.stockChartYValues,type:"scatter",mode:"lines",marker:{color:"blue"},fill:"tonexty"}],layout:{width:1e3,height:600,title:""},config:{displayModeBar:!1}}))}}]),a}(c.a.Component);var Y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(j,null))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Y,null)),document.getElementById("root"))},6:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.3aba7c09.chunk.js.map
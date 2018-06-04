<script>
	export default {
		name : 'Cart',
		data(){
			return {
				productList: [],
				totalMoney:0,
        checkAllFlag: false
			}
		},

    // 过滤器 
    filters: {
      formatMoney(value){
        return '￥' + value.toFixed(2);
      }
    },

		mounted(){
      // 相当于jquery中document.ready()函数，DOM加载完成
			this.$nextTick(function(){
				this.cartView();
			});
		},
		methods:{
			cartView(){
				var _this = this;
				this.$http.get("../../static/data/cartData.json",{"id":123}).then(res => {
          console.log(res);
					_this.productList = res.body.result.list;
					//_this.totalMoney = res.body.result.totalMoney;
				})
			},
      changeMoney(product,way){
        if(way < 0) {
          product.productQuantity--;
          if(product.productQuantity < 1) {
            product.productQuantity = 1;
          }
        } else {
          product.productQuantity++;
        }
        if(product.checked) {
          this.calcTotalPrice();
        } 
      },
      selectProduct(item){
        if(typeof item.checked === 'undefined') {
          // 全局使用set
          // Vue.set(item,'checked',true);
          this.$set(item,'checked',true);
        } else {
          item.checked = !item.checked;
        }
        this.calcTotalPrice();
      },
      checkAll(flag){
        this.checkAllFlag = flag;
        var _this = this;
        this.productList.forEach(function(item,index){
            if(typeof item.checked === 'undefinded'){
              _this.$set(item,'checked',_this.checkAllFlag);
          } else {
            item.checked = _this.checkAllFlag;
          }
        }); 
        this.calcTotalPrice();
      },
      calcTotalPrice(){
        var _this = this;
        _this.totalMoney = 0;
        this.productList.forEach(function(item,index){
          if(item.checked){
            _this.totalMoney += item.productPrice * item.productQuantity ;
          }
        });
      }
		}
	}
</script>
<template>
  <div>
    <x-header>标题（自定义主体颜色）</x-header>
    <group>
      <x-switch title="基本使用" v-model="show1"></x-switch>
      <x-switch title="安卓风格" v-model="show7"></x-switch>
      <x-switch title="显示取消菜单" v-model="show2"></x-switch>
      <x-switch title="使用数组定义菜单" v-model="show5"></x-switch>
    </group>
    <actionsheet
      v-model="show1"
      :menus="menus1"
      @on-click-menu="click"
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')"></actionsheet>
    <actionsheet v-model="show2" :menus="menus2" @on-click-menu="click" show-cancel></actionsheet>
    <actionsheet v-model="show5" :menus="menus5" show-cancel @on-click-menu="click5"></actionsheet>
    <actionsheet
      v-model="show7"
      :menus="menu7"
      theme="android"
      @on-click-menu="click"
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')">
    </actionsheet>
    <div class="rem-test">测试rem宽度</div>
  </div>
</template>

<script>
import { TransferDom, Actionsheet, Group, XSwitch, Toast, XHeader } from 'vux';
export default {
  components: {
    Actionsheet,
    Group,
    XSwitch,
    Toast,
    XHeader
  },
  directives: {
    TransferDom
  },
  data () {
    return {
      show1: false,
      menus1: {
        menu1: '分享给朋友',
        menu2: '分享到朋友圈'
      },
      show2: false,
      menus2: {
        menu1: '拍照',
        menu2: '从相册选择'
      },
      show5: false,
      menus5: [{
        label: 'Primary',
        type: 'primary',
        value: 'primary',
        otherProp: 'hey'
      }, {
        label: 'Warn',
        type: 'warn'
      }, {
        label: 'Disabled',
        type: 'disabled'
      }, {
        label: 'Default'
      }],
      show7: false,
      menu7: {
        menu1: '北京烤鸭',
        menu2: '陕西油泼面',
        menu3: '西安肉夹馍'
      }
    };
  },
  methods: {
    log (str) {
      console.log(str);
    },
    click (key) {
      console.log(key);
    },
    click5 (key, item) {
      console.log(key, item);
    }
  }
};
</script>

<style>
.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
.rem-test{width: 3rem;font-size: 0.3rem;}
</style>

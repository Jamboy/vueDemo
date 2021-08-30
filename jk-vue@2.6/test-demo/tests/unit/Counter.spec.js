/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-08-30 15:24:58
 * @LastEditTime: 2021-08-30 15:42:06
 */
import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

// 定义测试集
describe("Counter.vue", () => {
  let isCalled = false;
  const wrapper = mount(Counter,{
    listeners:{
      change(){
        isCalled = true;
      }
    }
  });
  it("render counter.html", () => {
    expect(wrapper.html()).toMatchSnapshot()
  });

  it("counter++",()=>{
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
    expect(isCalled.toBe(true))
  });
});

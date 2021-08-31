/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-08-30 15:24:58
 * @LastEditTime: 2021-08-30 17:12:40
 */
import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";
import sinon from "sinon";

// 定义测试集
describe("Counter.vue", () => {
  let isCalled = false;
  const change = sinon.spy()
  const wrapper = mount(Counter,{
    listeners:{
      change
      // change(){
      //   isCalled = true;
      // }
    }
  });
  it("render counter.html", () => {
    expect(wrapper.html()).toMatchSnapshot()
  });

  it("counter++",()=>{
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
    // expect(isCalled.toBe(true))
    expect(change.called).toBe(true)
    button.trigger('click')
    expect(change.callCount).toBe(2)
  });
});

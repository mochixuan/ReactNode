import {add} from '../src/app/utils/util'

it('测试 util add 结果', () => {
    expect(add(1,'1')).toEqual('11');
})

it('测试 util add 结果', () => {
    expect(add(1, 2)).toEqual(3);
})
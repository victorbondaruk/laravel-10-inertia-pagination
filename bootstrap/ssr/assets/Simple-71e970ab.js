import { ref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./Observer-001b86f5.js";
const _sfc_main = {
  __name: "Simple",
  __ssrInlineRender: true,
  props: {
    users: Object
  },
  setup(__props) {
    const props = __props;
    console.log(props.users);
    const items = ref(props.users.data);
    const next = ref(props.users.links.next);
    const total = ref(props.users.meta.total);
    const getItems = async () => {
      if (next.value !== null) {
        router.visit(next.value, {
          preserveState: true,
          preserveScroll: true,
          onSuccess: (data) => {
            console.log(data.props.users);
            next.value = data.props.users.links.next;
            items.value.push(...data.props.users.data);
          }
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Users" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Users Total ${ssrInterpolate(total.value)}</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Users Total " + toDisplayString(total.value), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}><div class="mt-10 sm:mt-0"${_scopeId}><h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Total ${ssrInterpolate(total.value)}</h2>`);
            if (items.value.length > 0) {
              _push2(`<div class="w-full overflow-x-auto"${_scopeId}><div class="bg-white shadow sm:rounded-lg"${_scopeId}><div class="bg-white rounded-md shadow overflow-x-auto"${_scopeId}><div class="h-[400px] w-[800px] overflow-auto border border-solid border-blue-300"${_scopeId}><ul${_scopeId}><!--[-->`);
              ssrRenderList(items.value, (user) => {
                _push2(`<li${_scopeId}>${ssrInterpolate(user.id)}</li>`);
              });
              _push2(`<!--]--></ul>`);
              _push2(ssrRenderComponent(_sfc_main$2, { onIntersect: getItems }, null, _parent2, _scopeId));
              _push2(`</div></div></div></div>`);
            } else {
              _push2(`<div${_scopeId}><div class="px-4 py-4"${_scopeId}>No users found.</div></div>`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "mt-10 sm:mt-0" }, [
                  createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Total " + toDisplayString(total.value), 1),
                  items.value.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "w-full overflow-x-auto"
                  }, [
                    createVNode("div", { class: "bg-white shadow sm:rounded-lg" }, [
                      createVNode("div", { class: "bg-white rounded-md shadow overflow-x-auto" }, [
                        createVNode("div", { class: "h-[400px] w-[800px] overflow-auto border border-solid border-blue-300" }, [
                          createVNode("ul", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(items.value, (user) => {
                              return openBlock(), createBlock("li", {
                                key: user.id
                              }, toDisplayString(user.id), 1);
                            }), 128))
                          ]),
                          createVNode(_sfc_main$2, { onIntersect: getItems })
                        ])
                      ])
                    ])
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("div", { class: "px-4 py-4" }, "No users found.")
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Simple.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

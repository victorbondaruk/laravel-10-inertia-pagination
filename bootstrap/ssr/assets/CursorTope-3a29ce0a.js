import { ref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./Observer-001b86f5.js";
const _sfc_main = {
  __name: "CursorTope",
  __ssrInlineRender: true,
  props: {
    users: Object
  },
  setup(__props) {
    const props = __props;
    console.log(props.users);
    const items = ref(props.users.data);
    const meta_prev_cursor = ref(props.users.meta.prev_cursor);
    const meta_next_cursor = ref(props.users.meta.next_cursor);
    if (props.users.meta.query.cursor) {
      console.log("re");
      window.location.href = route("paginate.cursor_tope");
    }
    const getItems = async () => {
      if (meta_next_cursor.value !== null) {
        router.visit(route("paginate.cursor_tope") + "?cursor=" + meta_next_cursor.value, {
          preserveState: true,
          preserveScroll: true,
          onSuccess: (data) => {
            console.log(data.props.users);
            meta_prev_cursor.value = data.props.users.meta.prev_cursor;
            meta_next_cursor.value = data.props.users.meta.next_cursor;
            items.value.push(...data.props.users.data);
          }
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Users" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Users </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Users ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}><div class="mt-10 sm:mt-0"${_scopeId}>`);
            if (items.value.length > 0) {
              _push2(`<div class="w-full overflow-x-auto"${_scopeId}><div class="bg-white shadow sm:rounded-lg"${_scopeId}><div class="bg-white rounded-md shadow overflow-x-auto"${_scopeId}><div class="overflow-auto border border-solid border-blue-300"${_scopeId}><ul${_scopeId}><!--[-->`);
              ssrRenderList(items.value, (user) => {
                _push2(`<li${_scopeId}>${ssrInterpolate(user.id)}</li>`);
              });
              _push2(`<!--]--></ul>`);
              _push2(ssrRenderComponent(_sfc_main$2, { onIntersect: getItems }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
              if (meta_next_cursor.value !== null) {
                _push2(`<div class=""${_scopeId}> Total: más de ${ssrInterpolate(items.value.length)}</div>`);
              } else {
                _push2(`<div class=""${_scopeId}> Total: ${ssrInterpolate(items.value.length)}</div>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}><div class="px-4 py-4"${_scopeId}>No users found.</div></div>`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "mt-10 sm:mt-0" }, [
                  items.value.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "w-full overflow-x-auto"
                  }, [
                    createVNode("div", { class: "bg-white shadow sm:rounded-lg" }, [
                      createVNode("div", { class: "bg-white rounded-md shadow overflow-x-auto" }, [
                        createVNode("div", { class: "overflow-auto border border-solid border-blue-300" }, [
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
                    ]),
                    meta_next_cursor.value !== null ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ""
                    }, " Total: más de " + toDisplayString(items.value.length), 1)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: ""
                    }, " Total: " + toDisplayString(items.value.length), 1))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/CursorTope.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

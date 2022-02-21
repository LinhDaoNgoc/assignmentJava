export const reRender = async (dom, component, id = "") => {
  document.querySelector(dom).innerHTML = await component.render(id);
  if (component.afterRender) component.afterRender(id);
};

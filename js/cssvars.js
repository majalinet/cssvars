function cvSelect(selector) {
    return document.querySelector(selector);
}

function cvSelectAll(selector) {
    return document.querySelectorAll(selector);
}

function cvCreateElement(tag) {
    return document.createElement(tag);
}

function cvAddClass(element, className) {
    element.classList.add(className);
}

function cvRemoveClass(element, className) {
    element.classList.remove(className);
}

function cvToggleClass(element, className) {
    element.classList.toggle(className);
}

function cvHasClass(element, className) {
    return element.classList.contains(className);
}

function cvSetAttribute(element, attr, value) {
    element.setAttribute(attr, value);
}

function cvGetAttribute(element, attr) {
    return element.getAttribute(attr);
}

function cvRemoveAttribute(element, attr) {
    element.removeAttribute(attr);
}

function cvSetHTML(element, html) {
    element.innerHTML = html;
}

function cvGetHTML(element) {
    return element.innerHTML;
}

function cvSetText(element, text) {
    element.textContent = text;
}

function cvGetText(element) {
    return element.textContent;
}

function cvOn(element, event, callback) {
    element.addEventListener(event, callback);
}

function cvOff(element, event, callback) {
    element.removeEventListener(event, callback);
}

function cvSetStyle(element, property, value) {
    element.style[property] = value;
}

function cvGetStyle(element, property) {
    return getComputedStyle(element).getPropertyValue(property);
}

function cvRemoveElement(element) {
    element.remove();
}

function cvAppendChild(parent, child) {
    parent.appendChild(child);
}

function cvPrependChild(parent, child) {
    parent.prepend(child);
}

function cvReplaceElement(oldElement, newElement) {
    oldElement.replaceWith(newElement);
}

function cvInsertBefore(parent, newElement, referenceElement) {
    parent.insertBefore(newElement, referenceElement);
}

function cvInsertAfter(parent, newElement, referenceElement) {
    referenceElement.after(newElement);
}

function cvSetValue(input, value) {
    input.value = value;
}

function cvGetValue(input) {
    return input.value;
}

function cvClearValue(input) {
    input.value = '';
}

function cvHide(element) {
    element.style.display = 'none';
}

function cvShow(element, displayType = 'block') {
    element.style.display = displayType;
}

function cvToggleVisibility(element) {
    element.style.display = (element.style.display === 'none' ? 'block' : 'none');
}

function cvRedirect(url) {
    window.location.href = url;
}

function cvScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cvScrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function cvGetCssVariable(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName);
}

function cvSetCssVariable(variableName, value) {
    document.documentElement.style.setProperty(variableName, value);
}
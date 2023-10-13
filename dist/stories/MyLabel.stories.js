"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomColor = exports.Seconday = exports.AllCaps = exports.Basic = exports.meta = void 0;
var MyLabel_1 = require("../components/MyLabel");
exports.meta = {
    title: 'UI/labels/MyLabel',
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: { control: 'inline-radio' },
        fontColor: { control: 'color' }, //If the prop is a color, use the color control automatically, use it for other types as well
    },
};
exports.default = exports.meta;
exports.Basic = {
    args: {
        label: 'Basic label',
    }
};
exports.AllCaps = {
    args: {
        label: 'All Caps label',
        allCaps: true,
    }
};
exports.Seconday = {
    args: {
        label: 'Secondary label',
        color: 'text-secondary'
    }
};
exports.CustomColor = {
    args: {
        label: 'Custom color label',
        fontColor: '#ff0000'
    }
};
exports.CustomBackgroundColor = {
    args: {
        label: 'Custom color label',
        fontColor: '#ffffff',
        backgroundColor: '#5517ac'
    }
};

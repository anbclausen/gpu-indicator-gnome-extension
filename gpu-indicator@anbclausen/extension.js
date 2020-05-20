const Lang = imports.lang;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const St = imports.gi.St;
const GLib = imports.gi.GLib;

const Indicator = new Lang.Class({
    Name: "Indicator",
    Extends: PanelMenu.Button,

    _init: function (icon_str) {
        this.parent(null, "Indicator");

        this.icon = new St.Icon({
            icon_name: icon_str,
            style_class: "system-status-icon"
        });
        this.actor.add_actor(this.icon);
    }
});

let intel = false;
function init() {
    let nvidiamsg = GLib.spawn_command_line_sync("nvidia-smi")[1].toString();
    intel = nvidiamsg.includes("failed");
}

function enable() {
    let indicator;

    if (intel) {
        indicator = new Indicator("prime-intel");
    } else {
        indicator = new Indicator("prime-nvidia");
    }
    
    Main.panel.addToStatusArea("gpu-indicator", indicator);
}

function disable() {
    Main.panel.statusArea["gpu-indicator"].destroy();
}
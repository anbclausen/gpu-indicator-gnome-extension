# Top Bar GPU Indicator for GNOME DE
This extension is inteded to be used with [dglt1](https://github.com/dglt1)'s optimus-switch, specifically [optimus-switch-gdm](https://github.com/dglt1/optimus-switch-gdm) on [Manjaro](https://manjaro.org/). It might be relevant for other applications.

This extension adds a small icon in the top bar indicating which GPU you're currently using. This extension simply works by running ```nvidia-smi``` in the terminal, and checking if the Nvidia GPU is active. It assumes your system is equipped with an Intel GPU and a Nvidia GPU. If this is not the case for your system. This extension won't be useful for you.

Note: This extension won't cause any harm to your system if you don't have the right prerequisites, it just might show irrelavent and wrong information to you. (Use the extension at your own caution.)

Also feel free to edit and redistribute this extension for your liking.

## Getting Started

### Prerequisites
#### Hardware
You should have an Intel GPU and a Nvidia GPU.

#### optimus-switch
This extension is intended to be used with [dglt1](https://github.com/dglt1)'s optimus-switch, specifically [optimus-switch-gdm](https://github.com/dglt1/optimus-switch-gdm).

### Installing the extension
Clone the repo or simply download the gpu-indicator@anbclausen folder. You will have to move this folder into the path ```~/.local/share/gnome-shell/extensions```. The extension will now be located at ```~/.local/share/gnome-shell/extensions/gpu-indicator@anbclausen```. This is so that GNOME can locate the extension. This will be required for enabling the extension. 

### Enabling the extension
Write the following command in your terminal
```
gnome-extensions enable gpu-indicator@anbclausen
```

After this, you will have to restart GNOME. This can be done by a simple restart or by the keyboard shortcut Alt + F2 followed by typing 'r' + Enter into the text field.

### Disabling the extension
Write the following command in your terminal
```
gnome-extensions disable gpu-indicator@anbclausen
```

This will disable the extension immediatly. If you want to get rid of the extension completely from your system, simply delete the ```gpu-indicator@anbclausen``` folder in ```~/.local/share/gnome-shell/extensions```.

## Testing
This extension alongside [optimus-switch-gdm](https://github.com/dglt1/optimus-switch-gdm) works great on the following system as of May 20, 2020:

Dell XPS 7950, 2019 model,
Intel Core i7-9750H Processor,
Nvidia GTX 1650 dGPU,
5.4.39-1-MANJARO x86_64 Kernel,
Gnome 3.36.2.

## Authors

* **Anders B. Clausen** - [anbclausen](https://github.com/anbclausen)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* Thank you [dglt1](https://github.com/dglt1) for creating the optimus-switch scripts.
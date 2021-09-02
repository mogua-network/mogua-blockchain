import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("MOGUA_ROOT", "~/.mogua/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("MOGUA_KEYS_ROOT", "~/.mogua_keys"))).resolve()

from setuptools import setup

dependencies = [
    "blspy==1.0.2",  # Signature library
    "chiavdf==1.0.2",  # timelord and vdf verification
    "chiabip158==1.0",  # bip158-style wallet filters
    "chiapos==1.0.3",  # proof of space
    "clvm==0.9.7",
    "clvm_rs==0.1.8",
    "clvm_tools==0.4.3",
    "aiohttp==3.7.4",  # HTTP server for full node rpc
    "aiosqlite==0.17.0",  # asyncio wrapper for sqlite, to store blocks
    "bitstring==3.1.9",  # Binary data management library
    "colorlog==5.0.1",  # Adds color to logs
    "concurrent-log-handler==0.9.19",  # Concurrently log and rotate logs
    "cryptography==3.4.7",  # Python cryptography library for TLS - keyring conflict
    "keyring==23.0.1",  # Store keys in MacOS Keychain, Windows Credential Locker
    "keyrings.cryptfile==1.3.4",  # Secure storage for keys on Linux (Will be replaced)
    #  "keyrings.cryptfile==1.3.8",  # Secure storage for keys on Linux (Will be replaced)
    #  See https://github.com/frispete/keyrings.cryptfile/issues/15
    "PyYAML==5.4.1",  # Used for config file format
    "setproctitle==1.2.2",  # Gives the mogua processes readable names
    "sortedcontainers==2.3.0",  # For maintaining sorted mempools
    "websockets==8.1.0",  # For use in wallet RPC and electron UI
    "click==7.1.2",  # For the CLI
    "dnspython==2.1.0",  # Query DNS seeds
]

upnp_dependencies = [
    "miniupnpc==2.2.2",  # Allows users to open ports on their router
]

dev_dependencies = [
    "pytest",
    "pytest-asyncio",
    "flake8",
    "mypy",
    "black",
    "aiohttp_cors",  # For blackd
    "ipython",  # For asyncio debugging
]

kwargs = dict(
    name="mogua-blockchain",
    author="Lion Ethan",
    author_email="ethan@mogua.gua",
    description="Mogua blockchain full node, farmer, timelord, and wallet.",
    url="https://mogua.gua/",
    license="Apache License",
    python_requires=">=3.7, <4",
    keywords="mogua blockchain node",
    install_requires=dependencies,
    setup_requires=["setuptools_scm"],
    extras_require=dict(
        uvloop=["uvloop"],
        dev=dev_dependencies,
        upnp=upnp_dependencies,
    ),
    packages=[
        "build_scripts",
        "mogua",
        "mogua.cmds",
        "mogua.clvm",
        "mogua.consensus",
        "mogua.daemon",
        "mogua.full_node",
        "mogua.timelord",
        "mogua.farmer",
        "mogua.harvester",
        "mogua.introducer",
        "mogua.plotting",
        "mogua.pools",
        "mogua.protocols",
        "mogua.rpc",
        "mogua.server",
        "mogua.simulator",
        "mogua.types.blockchain_format",
        "mogua.types",
        "mogua.util",
        "mogua.wallet",
        "mogua.wallet.puzzles",
        "mogua.wallet.rl_wallet",
        "mogua.wallet.cc_wallet",
        "mogua.wallet.did_wallet",
        "mogua.wallet.settings",
        "mogua.wallet.trading",
        "mogua.wallet.util",
        "mogua.ssl",
        "mozilla-ca",
    ],
    entry_points={
        "console_scripts": [
            "mogua = mogua.cmds.mogua:main",
            "greendoge_wallet = mogua.server.start_wallet:main",
            "greendoge_full_node = mogua.server.start_full_node:main",
            "greendoge_harvester = mogua.server.start_harvester:main",
            "greendoge_farmer = mogua.server.start_farmer:main",
            "greendoge_introducer = mogua.server.start_introducer:main",
            "greendoge_timelord = mogua.server.start_timelord:main",
            "greendoge_timelord_launcher = mogua.timelord.timelord_launcher:main",
            "greendoge_full_node_simulator = mogua.simulator.start_simulator:main",
        ]
    },
    package_data={
        "mogua": ["pyinstaller.spec"],
        "mogua.wallet.puzzles": ["*.clvm", "*.clvm.hex"],
        "mogua.util": ["initial-*.yaml", "english.txt"],
        "mogua.ssl": ["greendoge_ca.crt", "greendoge_ca.key", "dst_root_ca.pem"],
        "mozilla-ca": ["cacert.pem"],
    },
    use_scm_version={"fallback_version": "unknown-no-.git-directory"},
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    zip_safe=False,
)


if __name__ == "__main__":
    setup(**kwargs)

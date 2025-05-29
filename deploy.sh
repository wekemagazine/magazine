#!/bin/bash

echo "🚀 Iniciando processo de deployment para produção..."

# Verificar se o Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI não encontrado. Instalando..."
    npm install -g vercel
fi

# Fazer login no Vercel (se necessário)
echo "🔐 Verificando autenticação..."
vercel whoami || vercel login

# Limpar cache e dependências
echo "🧹 Limpando cache..."
rm -rf .next
rm -rf node_modules
npm cache clean --force

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Build local para verificar erros
echo "🔨 Executando build local..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build local concluído com sucesso!"
    
    # Deploy para produção
    echo "🚀 Iniciando deploy para produção..."
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deploy concluído com sucesso!"
        echo "📊 Acesse o dashboard da Vercel para verificar analytics"
        echo "🔗 URL de produção disponível no output acima"
    else
        echo "❌ Erro durante o deploy"
        exit 1
    fi
else
    echo "❌ Erro no build local. Verifique os logs acima."
    exit 1
fi
